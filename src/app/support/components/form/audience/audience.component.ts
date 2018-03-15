import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent implements OnInit {

  public audienceForm: FormGroup;
  public axisroomsSelected: boolean = true;
  public aggregatorSelected: boolean = false;
  public allUsers = [];
  public countries = [];
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) { }

  ngOnInit() {
    this.audienceForm = this.formBuilder.group({
      templateType: [false,],
      country: ['all'],
      starRating: [0,],
      ruleName: [, Validators.required], //
      transactionCurrency: ['INR', Validators.required], //
      userRole: ["AGGREGATOR"], //user role
      userId: []
    });

    this.formDataService.getCountries().subscribe(
      res => {
        this.countries = JSON.parse(res['_body']);
      }
    );
  }


  getUserIds() {
    this.formDataService.getUserIds(this.audienceForm.value.userRole).subscribe(
      res => {
        this.allUsers = JSON.parse(res['_body']);
      }
    );
  }

  next() {
    this.audienceForm.value.starRating = parseInt(this.audienceForm.value.starRating);
    this.audienceForm.value.templateType == false ? this.audienceForm.value.templateType = 'DEFAULT' : this.audienceForm.value.templateType = 'CUSTOM';
    this.formDataService.audienceForm = this.audienceForm.value;
    //For Navigation
    this.formService.toggleFormTabs('audience', 'billing');

  }

}
