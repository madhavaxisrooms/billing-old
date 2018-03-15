import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'supplier', loadChildren: 'app/supplier/supplier.module#SupplierModule' },
  { path: 'support', loadChildren: 'app/support/support.module#SupportModule' },
  { path: '', redirectTo: '/support/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
