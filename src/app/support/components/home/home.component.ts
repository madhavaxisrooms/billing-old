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

  /**
   * 1. Getting all the templates from server and displaying in the template
   * 2. Getting the Formhidden flag from the form service.
   * 
   * @requires FormService 
   * @memberof HomeComponent
   */
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
  
  /**
   * 
   * @requires FormService Calling API to send the invoice date to the server.
   * @requires ToasterSevice Displaying Error and success messages.
   * @param {any} date Getting the Date from the user.
   * @memberof HomeComponent
   */
  sendInvoicesByDate(date){
    this.formService.sendInvoices(date).subscribe(
      res =>{
        this.toasterService.displayToaster(res['_body'], 'info');
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }

  sendInvoicesById(id){
    this.formService.sendInvoicesById(id).subscribe(
      res =>{
        this.toasterService.displayToaster(res['_body'], 'info');
      },
      err => {
        this.toasterService.displayToaster("Something went wrong.", 'error');
      }
    );
  }

  /**
   * Changes the form hidden flag to False. Hence showing the form.
   * @requires fromService To toggle form tabs back to audience and hide the form when needed.
   * @memberof HomeComponent
   */
  showForm() {
    this.formService.toggleFormTabs(null, 'audience')
    this.formService.toggleForm(false);
  }

}
