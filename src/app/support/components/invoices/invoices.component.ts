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
  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() {
    this.invoiceService.getAllInvoices().subscribe(
      res => {
        this.invoices = JSON.parse(res['_body']);
        this.actionMenu = new Array(this.invoices.length);
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
    
    let dateTemp = date.split("-");
    let dateFromatted = dateTemp[2]+"-"+dateTemp[1]+"-"+dateTemp[0];
    
    this.invoiceService.changeDueDate(this.invoiceIdForDueDate,dateFromatted).subscribe(
      res => {
        alert(res['_body']);
      }
    );
  }
}
