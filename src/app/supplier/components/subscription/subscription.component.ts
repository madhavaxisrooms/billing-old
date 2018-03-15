import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../shared/services/window-ref.service';
import { PaymentService } from '../../services/payment.service';
import { window } from 'rxjs/operators/window';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http/src/http';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public addCreditsVisibility: boolean = true;
  rzp1: any;
  public detailsHidden: boolean = true;
  public supplierDetails;

  constructor(
    private winRef: WindowRefService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.paymentService.getSupplierDetails().subscribe(
      res => {
        this.supplierDetails = JSON.parse(res["_body"]);
        console.log(this.supplierDetails);
      }
    );
  }
  paymentResponseHander(response) {
    this.paymentService.successfulPayment(response.razorpay_payment_id).subscribe(
      res => {
        console.log(res);
      }
    );
    
  }

  public payNow(amount): void {
    console.log(amount);
    
    var userDetails = {
      "paymentRequestType": "CREDIT",
      "loginId": this.supplierDetails.userId,
      "amount": amount,
      "guestDetail": {
        "firstName": "test",
        "lastName": "test1",
        "emailId": "test@mail.com",
        "mobileNumber": "9036032636"
      },
      "orderDetail": {
        "currency": this.supplierDetails.currency,
      }
    };

    this.paymentService.paymentGateway(userDetails).subscribe(
      res => {
        var userDetails = JSON.parse(res['_body']);
        var options = {
          'key': "rzp_test_eyPVcBwNeHotR9",
          'name': 'RazorPay Payment',
          'description': 'Axisrooms',
          'image': '../../../../assets/axisrooms-logo-small.png',
          "order_id": userDetails.orderDetail.pgReferenceId,
          'handler': this.paymentResponseHander.bind(this),
          'prefill': {
            'name': userDetails.guestDetail.firstName + " " + userDetails.guestDetail.lastName,
            'email': userDetails.guestDetail.emailId,
            'contact': userDetails.guestDetail.mobileNumber
          },
          'notes': {
            'address': ''
          },
          'theme': {
            'color': '#01285b'
          }
        };
        this.rzp1 = new this.winRef.nativeWindow.Razorpay(options);
        this.rzp1.open();
      },
      (err) => {
        console.log(err);
      });
  }

}
