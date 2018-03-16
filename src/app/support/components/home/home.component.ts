import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';


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
  constructor(
    private formService: FormService
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
  showForm() {
    this.formService.toggleFormTabs(null, 'audience')
    this.formService.toggleForm(false);
  }

}
