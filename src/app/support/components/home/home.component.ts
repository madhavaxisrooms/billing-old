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
  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
    this.formService.getAllTemplates().subscribe(
      res => {
        this.templateData = JSON.parse(res['_body']);
        this.loadingIndicator = true;

      }
    );

    this.formService.formHidden.subscribe((status) => { this.formHidden = status });
  }

  showForm() {
    this.formService.toggleFormTabs(null, 'audience')
    this.formService.toggleForm(false);
  }

}
