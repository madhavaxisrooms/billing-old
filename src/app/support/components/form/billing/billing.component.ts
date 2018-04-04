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

  testFunction() {
    console.log(this.billingForm.value.singleInvoice);

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


  searchFocused(value) {
    if (value == '') {
      return "SHOWING ALL HOTELS";
    }
  }

  searchQueryEntered(query) {
    if (query.includes("SHOWING ALL HOTELS")) {
      return query.replace("SHOWING ALL HOTELS", '');
    }
    return query;
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
  hotelSelected(hotel, i) {
    if (this.billingForm.value.ruleDetails[i].connectedHotels.indexOf(hotel) == -1)
      this.billingForm.value.ruleDetails[i].connectedHotels.push(hotel);
  }
  removeHotel(hotel, i) {
    let index = this.billingForm.value.ruleDetails[i].connectedHotels.indexOf(hotel)
    this.billingForm.value.ruleDetails[i].connectedHotels.splice(index, 1);
  }
  productChoice(productSelected) {
    this.formDataService.getUsers(productSelected).subscribe(
      res => {
        this.hotels = JSON.parse(res["_body"]);
        console.log(this.hotels);
      }
    );
    // this.billingForm.reset();
    // console.log(this.billingForm.value);

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
  }




}
