import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { WindowRefService } from '../../shared/services/window-ref.service';



@Injectable()
export class FormService {

  // Behaviour Subjects for Froms
  private formHiddenSource = new BehaviorSubject<boolean>(true);
  private audienceHiddenSource = new BehaviorSubject<boolean>(false);
  private billingHiddenSource = new BehaviorSubject<boolean>(true);
  private validityHiddenSource = new BehaviorSubject<boolean>(true);

  formHidden = this.formHiddenSource.asObservable();
  audienceHidden = this.audienceHiddenSource.asObservable();
  billingHidden = this.billingHiddenSource.asObservable();
  validityHidden = this.validityHiddenSource.asObservable();


  constructor(
    private http: Http,
    private winRef: WindowRefService
  ) { }

  toggleForm(change: boolean) {
    this.formHiddenSource.next(change);
  }

  //Take from component and to component
  toggleFormTabs(from: any, to: any) {

    if (from == null || to == null) {
      this.audienceHiddenSource.next(true);
      this.billingHiddenSource.next(true);
      this.validityHiddenSource.next(true);
    }
    else if (from === 'audience') this.audienceHiddenSource.next(true);
    else if (from === 'billing') this.billingHiddenSource.next(true);
    else if (from === 'validity') this.validityHiddenSource.next(true);

    if (to === 'audience') this.audienceHiddenSource.next(false);
    else if (to === 'billing') this.billingHiddenSource.next(false);
    else if (to === 'validity') this.validityHiddenSource.next(false);

  }

  

  getAllTemplates(): Observable<any> {
    const url = 'http://94.130.54.42:36000//v1/api/getTemplate';
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }
  
  createTemplate(template) {
    
    const url = "http://94.130.54.42:36000/v1/api/createTemplate";
    this.http.post(url, template).subscribe(
      res => {
        this.getAllTemplates();
        this.winRef.reload();
      },
      err =>{
        alert(err._body);
      }
    );
    
    
  }



}
