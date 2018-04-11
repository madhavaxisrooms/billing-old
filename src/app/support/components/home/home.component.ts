import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ToasterService } from '../../../shared/services/toaster.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  templateData;
  loadingIndicator: boolean = false;
  formHidden: boolean;
  aggrMenuHidden: boolean = true;
  templateDetailsHidden;
  public assignTemplateVisibility: boolean = false;
  public sendInvoicesVisibility: boolean = false;
  constructor(
    private formService: FormService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.formService.getAllTemplates().subscribe(
      res => {
        this.templateData = JSON.parse(res['_body']);
        this.templateDetailsHidden = new Array(this.templateData.templateDetails.length).fill(true);
        this.loadingIndicator = true;
      }
    );

    this.formService.formHidden.subscribe((status) => { this.formHidden = status });
  }
  hideTemplateDetails(message) {
    this.templateDetailsHidden[message] = true;
  }
  /**
   * Used to assign templates based on the supplier id provided by the user.
   * 
   * @param {String} supplierId 
   * @memberof HomeComponent
   */
  assignTemplate(supplierId: String){
    this.formService.assignTemplate(supplierId).subscribe(
      res =>{
        this.toasterService.displayToaster(res['_body'], 'info');
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }
  
  sendInvoices(date){
    this.formService.sendInvoices(date).subscribe(
      res =>{
        this.toasterService.displayToaster(res['_body'], 'info');
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }

  showForm() {
    this.formService.toggleFormTabs(null, 'audience')
    this.formService.toggleForm(false);
  }

}
