import { Component, OnInit, HostListener } from '@angular/core';
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

  public billingNavDisabled: boolean;
  public validityNavDisabled: boolean = true;

  constructor(
    private formService: FormService
  ) { }
  /**
   * Getting all the flags from the form serivice. Based on that showing/hiding the form components. 
   * Using the same idea for navigation in the form
   * @requires FormService getting the Behaviour subjects.
   * @memberof FormComponent
   */
  ngOnInit() {
    this.formService.audienceHidden.subscribe((status) => this.audienceHidden = status);
    this.formService.billingHidden.subscribe((status) => this.billingHidden = status);
    this.formService.validityHidden.subscribe((status) => this.validityHidden = status);
    this.formService.billingNavDisabled.subscribe((status) => this.billingNavDisabled = status);
  }

  /**
   * Hiding the form
   * 
   * @requires FormService
   * @memberof FormComponent
   */
  hideForm() {
    this.formService.toggleForm(true);
  }

  /**
   * Toggling form Tabs
   * 
   * @requires FormService
   * @memberof FormComponent
   */
  toggleFormTabs(from: any, to: string) {
    this.formService.toggleFormTabs(from, to);
  }

/**
 * 
 * Whenever the user presses the escape key. The Form will hide.
 * 
 * @requires Hostlistner 
 * @param {any} $event 
 * @memberof FormComponent
 */
@HostListener('window:keydown', ['$event'])
  doSomething($event) {
    if ($event.code == "Escape") {
      this.hideForm();
    }
  }
}
