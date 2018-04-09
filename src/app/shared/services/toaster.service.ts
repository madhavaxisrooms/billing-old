import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToasterService {

  private toasterHiddenSource = new BehaviorSubject<boolean>(true);
  private toasterMessageSource = new BehaviorSubject<String>("Default Message");
  private toasterMessageTypeSource = new BehaviorSubject<String>("success");

  toasterHidden = this.toasterHiddenSource.asObservable();
  toasterMessage = this.toasterMessageSource.asObservable();
  toasterMessageType = this.toasterMessageTypeSource.asObservable();


  constructor() { }

  displayToaster(message: string, messageType: string) {
    this.toasterHiddenSource.next(false);
    this.toasterMessageSource.next(message);
    this.toasterMessageTypeSource.next(messageType);
    setTimeout(() => { this.dismissToaster() }, 5000);
  }

  dismissToaster() {
    this.toasterHiddenSource.next(true);
  }

}
