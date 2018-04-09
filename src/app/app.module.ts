
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToasterComponent } from './shared/components/toaster/toaster.component';
import { ToasterService } from './shared/services/toaster.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
