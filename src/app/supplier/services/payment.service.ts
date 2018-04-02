import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  getSupplierDetails(supplierId) {
    const url = "https://billing-service.axisrooms.com/v1/api/supplierDetails/" + supplierId;
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  successfulPayment(paymentId) {
    const url = "https://billing-service.axisrooms.com/v1/api/payment/response?paymentId=" + paymentId;
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  paymentGateway(userDetails): Observable<any> {
    let url = "";
    userDetails.orderDetail.currency == "INR" ? url = url.concat("domestic") : url = url.concat("international");

    url = "https://billing-service.axisrooms.com/v1/api/payment/request/" + url;

    return this.http.post(url, userDetails).map(
      (res) => {
        return res;
      }
    );
  }


}
