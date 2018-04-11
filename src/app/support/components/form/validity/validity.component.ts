import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-validity',
  templateUrl: './validity.component.html',
  styleUrls: ['./validity.component.css']
})

export class ValidityComponent implements OnInit {
  
  public validityForm: FormGroup;
  public customHidden: boolean = false;
  public datesHidden: boolean = false;
  public restrictToPostPaid = false;
  public today;
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
  ) { }

  /**
   * Initialises the form.
   * Checks the tramsaction type selection from the Billing form
   * Initilizes today's date 
   * 
   * @requires FromDataService
   * @requires Moment A third party plugin for date manipulation
   * @memberof ValidityComponent
   */
  ngOnInit() {
    this.validityForm = this.formBuilder.group({
      validityType: ['PERPETUAL'],
      startDate: [],
      endDate: [],
      paymentOption: ['POSTPAID'],
    });

    this.formDataService.restrictToPostPaid.subscribe(res => { this.restrictToPostPaid = res; });
    this.today = moment(new Date()).format('YYYY-MM-DD');
  }

  /**
   * Sets the duration of the custom value.
   * By defualt assumes the custom duration is one month
   * 
   * @param {any} value 
   * @memberof ValidityComponent
   */
  duration(value) {
    if (value === 'CUSTOM') {
      this.customHidden = true;
      this.custom(1);
    } else {
      this.customHidden = false;
      this.validityForm.controls['startDate'].setValue(null);
    }

  }

  /**
   * Sets custom duration. 
   * 
   * @requires Moments A third party plugin for date manipulation
   * @param {any} value 
   * @memberof ValidityComponent
   */
  custom(value) {
    if (value === 'c') {
      this.datesHidden = true;
    } else {
      this.datesHidden = false;
      this.validityForm.value.startDate = moment().format('YYYY-MM-DD');
      this.validityForm.value.endDate = moment().add(value, 'M').format('YYYY-MM-DD');
    }
  }


  /**
   * Merges Validity into billing form
   * Toggle the form to hide it.
   * 
   * @memberof ValidityComponent
   */
  save() {
    this.formDataService.mergeValidityIntoBilling(this.validityForm.value);
    this.formService.toggleFormTabs('validity', null);
    this.formService.toggleForm(true);
  }
}
