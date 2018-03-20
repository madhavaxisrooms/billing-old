import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../shared/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  public invoices;
  public actionMenu;
  public changeDueDateVisibility: boolean = false;
  public invoiceIdForDueDate;
  public loader: boolean = false;
  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.invoiceService.getAllInvoices().subscribe(
      res => {
        this.invoices = JSON.parse(res['_body']);
        this.actionMenu = new Array(this.invoices.length);
        this.loader = true;
      }
    );
  }


  changeStatus(invoiceId, status) {
    this.invoiceService.changeInvoiceStatus(invoiceId, status).subscribe(
      res => {
        alert(res['_body']);
      }
    );
  }

  changeDueDate(date){
    this.invoiceService.changeDueDate(this.invoiceIdForDueDate,date).subscribe(
      res => {
        alert(res['_body']);
      }
    );
  }
}
