import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // Hide Tabs
  public audienceHidden: boolean;
  public billingHidden: boolean;
  public validityHidden: boolean;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
    this.formService.audienceHidden.subscribe((status) => this.audienceHidden = status);
    this.formService.billingHidden.subscribe((status) => this.billingHidden = status);
    this.formService.validityHidden.subscribe((status) => this.validityHidden = status);
  }

  hideForm() {
    this.formService.toggleForm(true);
  }

  toggleFormTabs(from: any, to: string) {
    this.formService.toggleFormTabs(from, to);
  }

}
