import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToasterService {
  /**
   * Creating a behaviour subject to broadcast to toaster details
   * 
   * @private
   * @memberof ToasterService
   */
  private toasterHiddenSource = new BehaviorSubject<boolean>(true);
  private toasterMessageSource = new BehaviorSubject<String>("Default Message");
  private toasterMessageTypeSource = new BehaviorSubject<String>("success");

  toasterHidden = this.toasterHiddenSource.asObservable();
  toasterMessage = this.toasterMessageSource.asObservable();
  toasterMessageType = this.toasterMessageTypeSource.asObservable();


  constructor() { }

  /**
   * Displays the Toater
   * hides the toaster in 5 seconds
   * 
   * @param {string} message 
   * @param {string} messageType 
   * @memberof ToasterService
   */
  displayToaster(message: string, messageType: string) {
    this.toasterHiddenSource.next(false);
    this.toasterMessageSource.next(message);
    this.toasterMessageTypeSource.next(messageType);
    setTimeout(() => { this.dismissToaster() }, 5000);
  }

  /**
   * Dismisses the toaster. 
   * 
   * @memberof ToasterService
   */
  dismissToaster() {
    this.toasterHiddenSource.next(true);
  }

}
