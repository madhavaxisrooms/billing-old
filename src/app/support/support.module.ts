import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { SupportRoutingModule } from './support-routing.module';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AudienceComponent } from './components/form/audience/audience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './components/form/billing/billing.component';
import { ValidityComponent } from './components/form/validity/validity.component';
import { FormService } from './services/form.service';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormDataService } from './components/form/services/form-data.service';
import { InvoiceService } from '../shared/services/invoice.service';
import {LoadingIndicatorComponent} from './components/loading-indicator/loading-indicator.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component'
import { WindowRefService } from '../shared/services/window-ref.service';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    InvoicesComponent,
    HomeComponent,
    FormComponent,
    AudienceComponent,
    BillingComponent,
    ValidityComponent,
    LoadingIndicatorComponent,
    SearchPipe,
    TemplateDetailsComponent,
  ],
  providers:[
    FormService,
    FormDataService,
    InvoiceService,
    WindowRefService
  ]
})
export class SupportModule {
}
