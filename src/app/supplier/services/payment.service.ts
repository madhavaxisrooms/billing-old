import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PaymentService {

  constructor(private http: Http) { }

  /**
   * Gets Supplier details based on supplier ID
   * 
   * @param {any} supplierId 
   * @returns 
   * @memberof PaymentService
   */
  getSupplierDetails(supplierId) {
    const url = "https://billing-service.axisrooms.com/v1/api/supplierDetails/" + supplierId;
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  /**
   * Notifies the server on successfull completion of payment
   * 
   * @param {any} paymentId Returned by Razorpay
   * @returns 
   * @memberof PaymentService
   */
  successfulPayment(paymentId) {
    const url = "https://billing-service.axisrooms.com/v1/api/payment/response?paymentId=" + paymentId;
    return this.http.post(url, null).map(
      res => {
        return res;
      }
    )
  }

  /**
   * Based on the currency it decides if domestic or international url is to be called.
   * 
   * @param {any} userDetails 
   * @returns {Observable<any>} 
   * @memberof PaymentService
   */
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

  downloadInvoice(){

    let url = "192.168.0.163:36000/v1/api/invoice/download";
    return this.http.get(url).map(
      (res) => {
        return res;
      },
      (err)=>{
        alert(err);
      }
    );
  }


}
