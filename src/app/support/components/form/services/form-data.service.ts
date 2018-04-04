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

  private restrictToPostPaidSource = new BehaviorSubject<boolean>(false);
  restrictToPostPaid = this.restrictToPostPaidSource.asObservable();


  enableRestrictToPostPaid(val) {
    this.restrictToPostPaidSource.next(val);
  }

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

  getCountries(): Observable<any> {
    const url = "https://billing-service.axisrooms.com/v1/api/country";
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }

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

  getUsers(product): Observable<any> {
    const url = "https://billing-service.axisrooms.com/v1/api/userHotelList?requestType=HOTEL_LIST&productType=" + product + "&userId=" + this.audienceForm.userId;
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }



  //Last function called from Validity TAB
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

  mergeForms() {
    this.mergerdForm = { ...this.userDetails, ...this.audienceForm, ...this.billingForm };
    console.log(this.mergerdForm);
    this.formService.createTemplate(this.mergerdForm);
  }
}
