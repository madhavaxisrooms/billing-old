import { Injectable } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FormDataService {
  constructor(
    private formService: FormService,
    private http: Http
  ) { }
  /**
   * Setting a behaviour subject to broadcast weather the restrictToPostPaid flag is to be set to true or false
   * 
   * @private 
   * @memberof FormDataService
   */
  private restrictToPostPaidSource = new BehaviorSubject<boolean>(false);
  restrictToPostPaid = this.restrictToPostPaidSource.asObservable();


  enableRestrictToPostPaid(val) {
    this.restrictToPostPaidSource.next(val);
  }

  /**
   * Behaviour subject to check if the user has selected Default or custom in the Audience From
   * 
   * @private
   * @memberof FormDataService
   */
  private isDefaultSource = new BehaviorSubject<string>("DEFAULT");
  isDefault = this.isDefaultSource.asObservable();

  toggleIsDefault(val) {
    this.isDefaultSource.next(val);
  }


  public audienceForm = {
    ruleName: '',
    country: '',
    starRating: '', //Number
    templateType: '',
    userRole: '',
    userId: 1521 //Number
  };

  public billingForm = {
    productType: '',
    transactionCurrency: '',
    singleInvoice: false,
    ruleDetails: []
  };

  public validityForm = {
    validityType: '',
    startDate: '',
    endDate: '',
    paymentOption: ''
  }
  public userDetails = {
    loginUserId: 1521, //Number
  }
  public mergerdForm = {};

  /**
   * Gets all countries from server
   * 
   * @returns {Observable<any>} 
   * @memberof FormDataService
   */
  getCountries(): Observable<any> {
    const url = "https://billing-service.axisrooms.com/v1/api/country";
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }
/**
 * Gets all the user based on the usertype selected in the audience form
 * 
 * @param {any} userType 
 * @returns {Observable<any>} 
 * @memberof FormDataService
 */
getUserIds(userType): Observable<any> {

    if (userType == 'AGGREGATOR') val = 8;
    else if (userType == 'SUPPLIER') val = 1;
    else if (userType == 'SUPPLIER_ADMIN') val = 6;
    var val;

    const url = "https://billing-service.axisrooms.com/v1/api/userHotelList?requestType=USER_LIST&userType=" + val;
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }

  /**
   * Gets all hotels based on product type and userId entered in the audience form
   * 
   * @param {any} product 
   * @returns {Observable<any>} 
   * @memberof FormDataService
   */
  getUsers(product): Observable<any> {
    const url = "https://billing-service.axisrooms.com/v1/api/userHotelList?requestType=HOTEL_LIST&productType=" + product + "&userId=" + this.audienceForm.userId;
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }


/**
 * Function called from validity tab.
 * Merges the data of validity form and Billing form
 * 
 * @param {any} validityFormValue 
 * @memberof FormDataService
 */
mergeValidityIntoBilling(validityFormValue) {

    for (let i = 0; i < this.billingForm.ruleDetails.length; i++) {
      if (this.billingForm.ruleDetails[i].connectedHotels.length > 0) {
        this.billingForm.ruleDetails[i].ruleType = "CUSTOM";
      } else {
        this.billingForm.ruleDetails[i].ruleType = "DEFAULT";
      }
      this.billingForm.ruleDetails[i].recurring = JSON.parse(this.billingForm.ruleDetails[i].recurring);
      this.billingForm.ruleDetails[i].paymentCycle = parseInt(this.billingForm.ruleDetails[i].paymentCycle);
      this.billingForm.ruleDetails[i].chargeValue = parseInt(this.billingForm.ruleDetails[i].chargeValue);
      this.billingForm.ruleDetails[i] = { ...this.billingForm.ruleDetails[i], ...validityFormValue };
    }
    this.mergeForms();
  }

  /**
   * Called from merged form. Is responsible of merging all the form parts and sending it to formservice to post in the server.
   * 
   * @requires FromService
   * @memberof FormDataService
   */
  mergeForms() {
    this.mergerdForm = { ...this.userDetails, ...this.audienceForm, ...this.billingForm };
    this.formService.createTemplate(this.mergerdForm);
  }
}
