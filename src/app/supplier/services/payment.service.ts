import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  getSupplierDetails() {
    //Entering the User ID statically. Will enter it dynamically later.
    const url = "http://94.130.54.42:36000/v1/api/supplierDetails/1101";
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  successfulPayment(paymentId) {
    const url = "http://94.130.54.42:36000/v1/api/payment/response?paymentId=" + paymentId;
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  paymentGateway(userDetails): Observable<any> {
    var url = "";
    userDetails.orderDetail.currency == "INR" ? url = url.concat("domestic") : url = url.concat("international");

    url = "http://94.130.54.42:36000/v1/api/payment/request/" + url;

    return this.http.post(url, userDetails).map(
      (res) => {
        return res;
      }
    );
  }


}
