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
    this.billingForm = this.formBuilder.group({
      productType: ['BE'],
      transactionCurrency: ['INR'],
      ruleDetails: this.formBuilder.array([
        this.initRulesArray(),
      ])
    });

    this.formDataService.isDefault.subscribe(res => { this.isDefault = res; if (this.isDefault != "DEFAULT") this.productChoice("BE") });

  }
  initRulesArray() {
    return this.formBuilder.group({
      connectedHotels: [[]],
      ruleType: [['DEFAULT'], Validators.required],
      recurring: [true, Validators.required], //reccuring - boolean
      paymentType: ['FIXED', Validators.required], // payment type - enum  
      trasactionBase: [], //trasactionBase - enum
      chargeType: ['FIXED', Validators.required],//charge type - enum | fixed percentage
      chargeValue: [, [Validators.required, Validators.pattern('^[0-9]{1,10}$')]], //chargevalue
      paymentCycle: [1, Validators.required] //paymentCycle - num 1,3,6,12
    });
  }


  searchFocused(value) {
    if (value == '') {
      return "SHOWING ALL HOTELS";
    }
  }

  searchQueryEntered(query) {
    if(query.includes("SHOWING ALL HOTELS")) {
      return query.replace("SHOWING ALL HOTELS",'');
    }
    return query;
  }

  addRulesForm() {
    const control = <FormArray>this.billingForm.controls['ruleDetails']; 1
    control.push(this.initRulesArray());
  }
  removeRule(i) {
    console.log(this.billingForm.value.ruleDetails);
    console.log(i);
    this.billingForm.value.ruleDetails.splice(i, 1);
    this.ngOnInit();
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
