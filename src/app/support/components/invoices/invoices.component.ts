import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../shared/services/invoice.service';
import { WindowRefService } from '../../../shared/services/window-ref.service';
import { ToasterService } from '../../../shared/services/toaster.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  public invoiceDate;
  public invoices;
  public actionMenu;
  public changeDueDateVisibility: boolean = false;
  public invoiceIdForDueDate;
  public loader: boolean = false;
  constructor(
    private invoiceService: InvoiceService,
    private winRef: WindowRefService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.invoiceService.getAllInvoices().subscribe(
      res => {
        this.invoices = JSON.parse(res['_body']);
        if(this.invoices != null) this.actionMenu = new Array(this.invoices.length);
        this.loader = true;
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
        this.loader = true;
      }
    );
  }


  changeStatus(invoiceId, status, currentStatus) {
    if (currentStatus == 'PAID' && status == "DELETED") {
      this.toasterService.displayToaster("Cannot delete paid invoice", 'error');
    } else {
      this.invoiceService.changeInvoiceStatus(invoiceId, status).subscribe(
        res => {
          this.winRef.reload();
        },
        err => {
          this.toasterService.displayToaster("Something went wrong.", 'error');
        }
      );
    }
  }

  changeDueDate(date) {
    this.invoiceService.changeDueDate(this.invoiceIdForDueDate, date).subscribe(
      res => {
        this.winRef.reload();
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }
}
