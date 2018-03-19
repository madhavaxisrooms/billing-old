import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class InvoiceService {

  constructor(
    private http: Http
  ) { }

  getInvoiceDetailsById(userid) {
    const url = 'http://94.130.54.42:36000/v1/api/invoiceDetails/' + userid;
    return this.http.post(url, null).map(
      (res) => {        
        return res;
      }
    );
  }

  getAllInvoices() {
    const url = 'http://94.130.54.42:36000/v1/api/invoiceDetails';
    return this.http.post(url, null).map(
      (res) => {
        return res;
      }
    );
  }

  changeInvoiceStatus(invoiceId, change) {
    const url = 'http://94.130.54.42:36000/v1/api/changeStatus/' + invoiceId + '/' + change;
    return this.http.put(url, null).map(
      (res) => {
        return res;
      }
    );
  }

  changeDueDate(invoiceId, date) {
    const url = 'http://94.130.54.42:36000/v1/api/changeDueDate/' + invoiceId + '/' + date;
    return this.http.put(url, null).map(
      (res) => {
        return res;
      }
    );
  }

}
