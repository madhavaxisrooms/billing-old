import { Component, OnInit } from '@angular/core';
/**
 * Used to show the loader. 
 * Use it any component set the hidden flag set to true/false accordingly 
 * @export
 * @class LoadingIndicatorComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})

export class LoadingIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
