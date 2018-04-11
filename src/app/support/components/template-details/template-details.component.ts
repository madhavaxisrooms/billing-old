import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * Is a child template of the template summary.
 * Get template details and displays the data
 * 
 * @export
 * @class TemplateDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})

export class TemplateDetailsComponent implements OnInit {

  @Input() templateDetails;
  @Input() index;
  @Output() hideTemplate: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  /**
   * Emits the hidetemplate variable to the parent component. Used in hiding the template details view.
   * 
   * @memberof TemplateDetailsComponent
   */
  hideTemplateDetails() {    
    this.hideTemplate.emit(this.index);
  }

}
