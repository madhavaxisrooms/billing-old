import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {

  @Input() templateDetails;
  @Output() hideTemplate: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
    console.log(this.templateDetails);
  }

  hideTemplateDetails() {
    this.hideTemplate.emit(true);
  }

}
