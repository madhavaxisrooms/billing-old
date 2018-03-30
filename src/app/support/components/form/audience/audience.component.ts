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

  ngOnInit() {
    this.audienceForm = this.formBuilder.group({
      templateType: ['DEFAULT',],
      country: [],
      starRating: [0,],
      ruleName: [, [Validators.required, Validators.maxLength(50)]], //     
      userRole: ["SUPPLIER"], //user role
      userId: []
    });

    this.formDataService.getCountries().subscribe(
      res => {
        this.countries = JSON.parse(res['_body']);
      }
    );
    this.getUserIds();
  }

  fillAggregators(val) {
    if (val == 'agg') {
      this.audienceForm.controls['userRole'].setValue("AGGREGATOR");
      console.log(this.audienceForm.value.userRole);
      this.getUserIds();
    }
  }

  getUserIds() {
    this.formDataService.getUserIds(this.audienceForm.value.userRole).subscribe(
      res => {
        this.allUsers = JSON.parse(res['_body']);
      }
    );
  }

  userSelected(user) {
    this.selectedUser = user.userName + " " + user.userId;
    this.audienceForm.controls.userId.setValue(user.userId);
    this.usersSearchedList = [];
  }

  searchFocused(value) {
    if (value == '') {
      this.usersSearchedList = this.allUsers;
      return "SHOWING ALL HOTELS";
    } else return value;
  }

  searchUser(query){
    if(query === 'SHOWING ALL HOTELS'){
      this.usersSearchedList = this.allUsers;
    } else if (query.includes("SHOWING ALL HOTELS")){
        this.selectedUser =  query.replace("SHOWING ALL HOTELS", '');
    }else if(query=="" || query == undefined){
      this.usersSearchedList = [];
      this.usersSearchedList = this.allUsers;
    }else {
      console.log(query);
      this.usersSearchedList = [];
      let queryUC = query.toUpperCase();
      for (let i = 0, len = this.allUsers.length; i < len; i++) {
        let jointSearch = this.allUsers[i].userName + this.allUsers[i].userId;
        if (jointSearch.toUpperCase().indexOf(queryUC) != -1) this.usersSearchedList.push(this.allUsers[i]);
      }
    }

    
  }

  next() {
    this.audienceForm.value.starRating = parseInt(this.audienceForm.value.starRating);
    this.formDataService.audienceForm = this.audienceForm.value;
    this.formDataService.toggleIsDefault(this.audienceForm.value.templateType);
    //For Navigation
    console.log(this.audienceForm.value);

    this.formService.toggleFormTabs('audience', 'billing');

  }

}
