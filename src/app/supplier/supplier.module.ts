import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WindowRefService } from '../shared/services/window-ref.service';
import {PaymentService} from './services/payment.service';
import { HttpModule } from '@angular/http';
import { DetailsModalComponent } from './components/subscription/details-modal/details-modal.component';
import { ChargeValuePipe } from './pipes/charge-value.pipe';
import { RecurringPipe } from './pipes/recurring.pipe';
import { PaymentCyclePipe } from './pipes/payment-cycle.pipe';
import { InvoiceService } from '../shared/services/invoice.service';
import {LoadingIndicatorComponent} from './components/loading-indicator/loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    NavComponent,
    SubscriptionComponent,
    InvoicesComponent,
    HistoryComponent,
    HomeComponent,
    DetailsModalComponent,
    ChargeValuePipe,
    RecurringPipe,
    PaymentCyclePipe,
    LoadingIndicatorComponent
  ],
  providers:[
    WindowRefService,
    PaymentService,
    InvoiceService
  ]
})
export class SupplierModule { }
