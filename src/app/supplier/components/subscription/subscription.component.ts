import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../shared/services/window-ref.service';
import { PaymentService } from '../../services/payment.service';
import { window } from 'rxjs/operators/window';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http/src/http';
import { ToasterService } from '../../../shared/services/toaster.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  public suppierId;
  public addCreditsVisibility: boolean = true;
  rzp1: any;
  public detailsHidden: boolean = true;
  public supplierDetails;
  public loading: boolean = false;
  public supplierId;
  constructor(
    private winRef: WindowRefService,
    private paymentService: PaymentService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    
    this.suppierId = localStorage.getItem("id");
    
    this.paymentService.getSupplierDetails(this.suppierId).subscribe(
      res => {
        this.supplierDetails = JSON.parse(res["_body"]);
        this.loading = true;
      }
    );
  }
  paymentResponseHander(response) {
    this.paymentService.successfulPayment(response.razorpay_payment_id).subscribe(
      res => {
        console.log(res);
      }
    );
    this.winRef.reload();
  }

  public payNow(amount) {
    if(amount < 1){
      this.toasterService.displayToaster("Please enter any number greater than 0.", 'error');
      return 0;
    }
   
    if(isNaN(amount)){
      this.toasterService.displayToaster(amount + " is not a number", 'error');
      return 0;
    }
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
