import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { ToasterService } from '../../../../shared/services/toaster.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  public hotels = [];
  public currency;
  public billingForm: FormGroup;
  public isDefault: string; // To see if the user has selcted the default or the custom option in the audience Tab
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
    private toasterService: ToasterService
  ) { }

  /**
   * Initialises the form
   * Knows weather the Audiece form type was Custom pr default
   * 
   * @requires FormDataService
   * @memberof BillingComponent
   */
  ngOnInit() {
    this.initForm();
    this.formDataService.isDefault.subscribe(res => { this.isDefault = res; if (this.isDefault != "DEFAULT") this.productChoice("CM") });
  }
  /**
   * Initilises the From
   * Add
   * @memberof BillingComponent
   */
  initForm() {
    this.billingForm = this.formBuilder.group({
      productType: ['CM'],
      transactionCurrency: ['INR'],
      singleInvoice: [false,],
      ruleDetails: this.formBuilder.array([
        this.initRulesArray(),
      ])
    });
  }

  /**
   * Initialises and adds the Rules array for the ruledetails in the billingform.
   * 
   * 
   * @returns 
   * @memberof BillingComponent
   */
  initRulesArray() {
    return this.formBuilder.group({
      hotelDropdownList: [[]],
      connectedHotels: [[]],
      ruleType: [['DEFAULT'], Validators.required],
      recurring: [true, Validators.required], //reccuring - boolean
      paymentType: ['FIXED', Validators.required], // payment type - enum  
      transactionBase: [], //transactionBase - enum
      chargeType: ['FIXED', Validators.required],//charge type - enum | fixed percentage
      chargeValue: [, [Validators.required, Validators.pattern('^[0-9.]+'), Validators.min(1)]], //chargevalue
      paymentCycle: [1, Validators.required] //paymentCycle - num 1,3,6,12
    });
  }

  /**
   * Checks if the hotel is selected
   * Used for checking/unchecking the hotels in the select hotel drowpdown
   * 
   * @param {any} hotel hotel object as recieved from the server.
   * @param {any} i index
   * @returns {boolean}
   * @memberof BillingComponent
   */
  isSelected(hotel, i) {
    let hotelsSelected = [];
    for (let p = 0; p < this.billingForm.value.ruleDetails[i].connectedHotels.length; p++)
      hotelsSelected.push(this.billingForm.value.ruleDetails[i].connectedHotels[p].productName)
    let index = hotelsSelected.indexOf(hotel.productName);
    if (index == -1) {
      return false;
    }
    return true;
  }
  /**
   * Fills the hotel dropdown list with all the users for selection
   * 
   * @param {any} i index
   * @memberof BillingComponent
   */
  searchFocused(i) {
    this.billingForm.value.ruleDetails[i].hotelDropdownList = this.hotels;
  }

  /**
   * Filters the hoteldropdownlist based on the search query entered.
   * 
   * @param {any} query query typed by the user
   * @param {any} i index
   * @memberof BillingComponent
   */
  searchQueryEntered(query, i) {
    if (query == '') {
      this.billingForm.value.ruleDetails[i].hotelDropdownList = [];
    } else {
      this.billingForm.value.ruleDetails[i].hotelDropdownList = [];
      query = query.toUpperCase();
      for (let j = 0, len = this.hotels.length; j < len; j++) {
        let combinedSearch = this.hotels[j].productId + this.hotels[j].productName;
        if (combinedSearch.toUpperCase().indexOf(query) != -1) this.billingForm.value.ruleDetails[i].hotelDropdownList.push(this.hotels[j]);
      }
    }
  }

  /**
   * 1. Used to select/deselect all the hotels in the dropdown list. 
   * 2. Fills all the hotes in the connected hotels element of the Billing form
   * 
   * @param {boolean} operation True to select all. False to deselect all.
   * @param {any} i index
   * @memberof BillingComponent
   */
  selectAll(operation: boolean, i) {
    if (operation == true) {
      this.billingForm.controls.ruleDetails['controls'][i].controls.connectedHotels.setValue(this.billingForm.value.ruleDetails[i].hotelDropdownList);
      this.billingForm.value.ruleDetails[i].hotelDropdownList = this.hotels;
    } else {
      this.billingForm.value.ruleDetails[i].connectedHotels = [];
    }

  }

  /**
   * Pushes another rules array in the billing form ruledetails obejct
   * 
   * @memberof BillingComponent
   */
  addRulesForm() {
    const control = <FormArray>this.billingForm.controls['ruleDetails'];
    control.push(this.initRulesArray());
  }

  /**
   * Removes the rule from the billing form ruledetails object.
   * 
   * @param {any} i index 
   * @memberof BillingComponent
   */
  removeRule(i) {
    if (i > 0) {
      const control = <FormArray>this.billingForm.controls['ruleDetails'];
      control.removeAt(i);
    }
  }

  /**
   * 1. Emptying the hotel selected list. 
   * 2. Checking if the hotel is already checked.
   * 3. Pushing the hotel in the connected hotels array in the billing form
   * 4. If the hotel already exists in the connected hotels array, Remove it.
   * 
   * @param {any} hotel hotel object as recieved from the Server
   * @param {any} i index
   * @memberof BillingComponent
   */
  hotelChecked(hotel, i) {
    let dropdownRefill = [];
    let hotelsSelected = [];
    for (let k = 0; k < this.billingForm.value.ruleDetails[i].hotelDropdownList.length; k++){
      dropdownRefill.push(this.billingForm.value.ruleDetails[i].hotelDropdownList[k])
    }
    for (let p = 0; p < this.billingForm.value.ruleDetails[i].connectedHotels.length; p++){
      hotelsSelected.push(this.billingForm.value.ruleDetails[i].connectedHotels[p].productName)
    }
    let index = hotelsSelected.indexOf(hotel.productName);
    if (index == -1) {
      this.billingForm.value.ruleDetails[i].connectedHotels.push(hotel);
    } else {
      this.billingForm.value.ruleDetails[i].connectedHotels.splice(index, 1);
      this.billingForm.value.ruleDetails[i].hotelDropdownList = dropdownRefill;
      this.hotels = dropdownRefill;
    }
  }

  /**
   * 1. Based on the product choice of the user updares the hotels list 
   * 2. By Default shows the Channel manger's hotels
   * 3. Reinitialises the form to make sure no previous values are submitted. 
   * 
   * @requires FormDataService
   * @requires ToasterService
   * @param {any} productSelected 
   * @memberof BillingComponent
   */
  productChoice(productSelected) {
    if (this.isDefault === 'CUSTOM') {
      this.formDataService.getUsers(productSelected).subscribe(
        res => {
          this.hotels = JSON.parse(res["_body"]);
        },
        err => {
          this.toasterService.displayToaster("Something went wrong.", 'error');
        }
      );
      this.initForm();
      this.billingForm.controls.productType.setValue(productSelected);
    }
  }

  /**
   * Updates the Transaction base object in the billing form. 
   * Adds/Removes the validators based on user selection
   * 
   * @param {any} i index
   * @memberof BillingComponent
   */
  paymentTypeChange(i) {
    if (this.billingForm.value.ruleDetails[i].paymentType === "TRANSACTION_BASED") {
      this.billingForm.controls.ruleDetails['controls'][i].controls.transactionBase.setValidators([Validators.required]);
      this.billingForm.controls.ruleDetails['controls'][i].controls.transactionBase.updateValueAndValidity();
    } else {
      this.billingForm.controls.ruleDetails['controls'][i].controls.transactionBase.clearValidators();
      this.billingForm.controls.ruleDetails['controls'][i].controls.transactionBase.updateValueAndValidity();
    }
  }
  /**
   * To check if any of the payment type is tansaction based. Based on which we change the Payment type in Validity form
   * 
   * @returns {boolean} 
   * @memberof BillingComponent
   */
  checkPaymentType() {
    let rules = this.billingForm.value.ruleDetails;
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].paymentType === "TRANSACTION_BASED") {
        return true;
      }
    }
    return false;
  }

  /**
   * 1. Sends the billing form to the form data service
   * 2. Toggles the tabs
   * 3. Sends the paymentType to Form Data service.
   *
   * @requires FormDataService
   * @requires FormService
   * @memberof BillingComponent
   */
  next() {
    this.formDataService.billingForm = this.billingForm.value;
    this.formDataService.enableRestrictToPostPaid(this.checkPaymentType());
    this.formService.toggleFormTabs('billing', 'validity');
  }
}
