import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  public hotels = [];
  public hotelInputValue;
  public currency;
  public billingForm: FormGroup;
  public isDefault: string; // To see if the user has selcted the default or the custom option in the audience Tab
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
  ) { }
  ngOnInit() {
    this.initForm();
    this.formDataService.isDefault.subscribe(res => { this.isDefault = res; if (this.isDefault != "DEFAULT") this.productChoice("CM") });
  }
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
  initRulesArray() {
    return this.formBuilder.group({
      hotelDropdownList:[[]],
      connectedHotels: [[]],
      ruleType: [['DEFAULT'], Validators.required],
      recurring: [true, Validators.required], //reccuring - boolean
      paymentType: ['FIXED', Validators.required], // payment type - enum  
      trasactionBase: [], //trasactionBase - enum
      chargeType: ['FIXED', Validators.required],//charge type - enum | fixed percentage
      chargeValue: [, [Validators.required, Validators.pattern('^[0-9.]+'),Validators.min(1)]], //chargevalue
      paymentCycle: [1, Validators.required] //paymentCycle - num 1,3,6,12
    });
  }
  isSelected(hotel,i){
    let hotelsSelected = [];
    for( let p = 0; p < this.billingForm.value.ruleDetails[i].connectedHotels.length; p ++) 
    hotelsSelected.push(this.billingForm.value.ruleDetails[i].connectedHotels[p].productName)
    let index = hotelsSelected.indexOf(hotel.productName);
    if (index == -1) {
      return false;
    } 
    return true;
  }
  searchFocused(i) {
    this.billingForm.value.ruleDetails[i].hotelDropdownList = this.hotels;
  }
  searchQueryEntered(query,i) {
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
  selectAll(operation,i){
    if(operation == true){
      this.billingForm.controls.ruleDetails['controls'][i].controls.connectedHotels.setValue(this.billingForm.value.ruleDetails[i].hotelDropdownList);
      this.billingForm.value.ruleDetails[i].hotelDropdownList = this.hotels;
      this.hotelInputValue =  this.billingForm.value.ruleDetails[i].connectedHotels.length;
    } else {
      this.billingForm.value.ruleDetails[i].connectedHotels = [];
      this.hotelInputValue =  this.billingForm.value.ruleDetails[i].connectedHotels.length;
    }
    
  }
  addRulesForm() {
    const control = <FormArray>this.billingForm.controls['ruleDetails'];
    control.push(this.initRulesArray());
  }
  removeRule(i) {
    if (i > 0) {
      const control = <FormArray>this.billingForm.controls['ruleDetails'];
      control.removeAt(i);
    }
  }
  hotelChecked(hotel,i) {
    let hotelsSelected = [];
    for( let p = 0; p < this.billingForm.value.ruleDetails[i].connectedHotels.length; p ++) 
    hotelsSelected.push(this.billingForm.value.ruleDetails[i].connectedHotels[p].productName)
    let index = hotelsSelected.indexOf(hotel.productName);
    if (index == -1) {
      this.billingForm.value.ruleDetails[i].connectedHotels.push(hotel);
    } else {
      this.billingForm.value.ruleDetails[i].connectedHotels.splice(index, 1);
    }
    this.hotelInputValue = this.billingForm.value.ruleDetails[i].connectedHotels.length;
  }
  removeHotel(hotel, i) {
    let index = this.billingForm.value.ruleDetails[i].connectedHotels.indexOf(hotel)
    this.billingForm.value.ruleDetails[i].connectedHotels.splice(index, 1);
  }
  productChoice(productSelected) {
    this.formDataService.getUsers(productSelected).subscribe(
      res => {
        this.hotels = JSON.parse(res["_body"]);
      },
      err => {
        alert('Something went wrong.');
      }
    );
    this.initForm();
    this.billingForm.controls.productType.setValue(productSelected);
  }
  paymentTypeChange(i) {
    if (this.billingForm.value.ruleDetails[i].paymentType === "TRANSACTION_BASED") {
      this.billingForm.controls.ruleDetails['controls'][i].controls.trasactionBase.setValidators([Validators.required]);
      this.billingForm.controls.ruleDetails['controls'][i].controls.trasactionBase.updateValueAndValidity();
    } else {
      this.billingForm.controls.ruleDetails['controls'][i].controls.trasactionBase.clearValidators();
      this.billingForm.controls.ruleDetails['controls'][i].controls.trasactionBase.updateValueAndValidity();
    }
  }
  //To check if any of the payment type is tansaction based. Based on which we change the Payment type in Validity form
  checkPaymentType() {
    let rules = this.billingForm.value.ruleDetails;
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].paymentType === "TRANSACTION_BASED") {
        return true;
      }
    }
    return false;
  }
  next() {
    this.formDataService.billingForm = this.billingForm.value;
    this.formDataService.enableRestrictToPostPaid(this.checkPaymentType());
    this.formService.toggleFormTabs('billing', 'validity');
    console.log(this.billingForm.value);
  }
}
