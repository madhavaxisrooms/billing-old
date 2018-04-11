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
  public selectedUser = '';
  public usersSearchedList;
  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) { }

  /**
   * 1. Initializing the form elements
   * 2. Getting the list of countries
   * 3. Getting UserIds
   * @memberof AudienceComponent
   */
  ngOnInit() {
    this.audienceForm = this.formBuilder.group({
      templateType: ['DEFAULT',],
      country: [, Validators.required],
      starRating: [0,],
      ruleName: [, [Validators.required, Validators.maxLength(50)]], //     
      userRole: ["SUPPLIER"], //user Role
      userId: []
    });

    this.formDataService.getCountries().subscribe(
      res => {
        this.countries = JSON.parse(res['_body']);
      }
    );
    this.getUserIds();
  }

  /**
   * 1. Gets the Aggregator type from the user
   * 2. Setting the user role  in the form
   * 3. Gets corresponding users
   * 4. Emptys the Users searched list
   * 5. Emptys the selected user feild
   * 
   * @param {any} val 
   * @memberof AudienceComponent
   */
  fillAggregators(val) {
    this.usersSearchedList.length = 0;
    if (val == 'agg' && this.audienceForm.value.templateType != "DEFAULT") {
      this.audienceForm.controls['userRole'].setValue("AGGREGATOR");
      this.selectedUser = '';
      this.usersSearchedList = [];
      this.getUserIds();
      this.searchUser(this.selectedUser);
    } else if (val == 'agg') {
      this.audienceForm.controls['userRole'].setValue("AGGREGATOR");
    }
  }

  /**
   * Gets all the userId from the service.
   * 
   * @requires FormDataService
   * @memberof AudienceComponent
   */
  getUserIds() {
    let counter = 0;
    this.formDataService.getUserIds(this.audienceForm.value.userRole).subscribe(
      res => {
        this.allUsers = JSON.parse(res['_body']);
        this.selectedUser = '';
        this.usersSearchedList = [];
        if (counter > 0)
          this.searchUser(this.selectedUser);
      }
    );
  }

  /**
   * 1. Gets the user that is selected.
   * 2. Updates the User selected input value
   * 3. Emptys the user searched list
   * 4. Sets the userId in the audience form
   *  
   * @param {any} user 
   * @memberof AudienceComponent
   */
  userSelected(user) {
    if (user.userName + " [" + user.userId + "]" == this.selectedUser) {
      this.selectedUser = user.userName + " [" + user.userId + "] ";
    } else {
      this.selectedUser = user.userName + " [" + user.userId + "]";
    }
    this.audienceForm.controls.userId.setValue(user.userId);
    this.usersSearchedList = [];
  }

  /**
   * Display all the Users when the user clicks on the select user input
   * 
   * @param {any} value 
   * @memberof AudienceComponent
   */
  searchFocused(value) {
    this.usersSearchedList = this.allUsers;
  }

  /**
   * Updates the user searched list based on the query provided by the user.
   * 
   * @param {any} query 
   * @memberof AudienceComponent
   */
  searchUser(query) {
    if (query == "" || query == undefined) {
      this.usersSearchedList = [];
      this.usersSearchedList = this.allUsers;
      this.audienceForm.controls['userId'].setValue(null);
      this.audienceForm.controls['userId'].setErrors({ 'incorrect': true });
    } else {
      this.usersSearchedList = [];
      let queryUC = query.toUpperCase();
      for (let i = 0, len = this.allUsers.length; i < len; i++) {
        let jointSearch = this.allUsers[i].userName + this.allUsers[i].userId;
        if (jointSearch.toUpperCase().indexOf(queryUC) != -1) this.usersSearchedList.push(this.allUsers[i]);
      }
    }
  }

  /**
   * 1. Updates the view based on template type selection.
   * 2. Adds and removes the validators of the respective views. 
   * This is done becuase if we add validators during form validation the user will not be able to submit the form.
   * 
   * @memberof AudienceComponent
   */
  templateTypeChange() {
    if (this.audienceForm.value.templateType == 'CUSTOM') {
      this.audienceForm.controls.userId.setValidators([Validators.required]);
      this.audienceForm.controls.userId.updateValueAndValidity();
      this.audienceForm.controls.country.clearValidators();
      this.audienceForm.controls.country.updateValueAndValidity();
    }

    if (this.audienceForm.value.templateType == 'DEFAULT') {
      this.audienceForm.controls.userId.clearValidators();
      this.audienceForm.controls.userId.updateValueAndValidity();
      this.audienceForm.controls.country.setValidators([Validators.required]);
      this.audienceForm.controls.country.updateValueAndValidity();
    }

  }

  /**
   * 1. Star rating disabled for now.
   * 2. Sets the is default flag in the formdataservice. 
   * 3. Toggles the tabs
   * 
   * @requires FormDataService
   * @requires FormSerivice
   * @memberof AudienceComponent
   */
  next() {
    this.audienceForm.value.starRating = parseInt(this.audienceForm.value.starRating);
    this.formDataService.audienceForm = this.audienceForm.value;
    this.formDataService.toggleIsDefault(this.audienceForm.value.templateType);
    this.formService.toggleFormTabs('audience', 'billing');

  }

}
