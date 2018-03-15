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

  public productSelected;
  public billingForm: FormGroup;
  public isDefault: string; // To see if the user has selcted the default or the custom option in the audience Tab
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) { }


  ngOnInit() {


    this.billingForm = this.formBuilder.group({
      productType: ['BE'], //productType
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
      paymentType: [, Validators.required], // payment type - enum  
      trasactionBase: [], //trasactionBase - enum
      chargeType: ['FIXED', Validators.required],//charge type - enum | fixed percentage
      chargeValue: [, Validators.required], //chargevalue
      paymentCycle: [, Validators.required] //paymentCycle - num 1,3,6,12
    });
  }
  addRulesForm() {
    const control = <FormArray>this.billingForm.controls['ruleDetails'];
    control.push(this.initRulesArray());
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
    this.isDefault = this.formDataService.audienceForm.templateType;
    productSelected == 'BE' ? this.productSelected = 'Booking Engine' : this.productSelected = 'Channel Manager';

    if (this.formDataService.audienceForm.templateType == "CUSTOM") {
      this.formDataService.getUsers(productSelected).subscribe(
        res => {
          // console.log(JSON.parse(res["_body"]));
          this.hotels = JSON.parse(res["_body"]);
        }
      );
    }
  }

  next() {
    this.formDataService.billingForm = this.billingForm.value;
    this.formService.toggleFromTabs('billing', 'validity');
  }

}
