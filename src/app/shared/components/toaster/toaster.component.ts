import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {


  constructor(private toasterService: ToasterService) { }

  public toasterHidden;
  public toasterMessage;
  public toasterMessageType;

  ngOnInit() {
    this.toasterService.toasterHidden.subscribe((status) => this.toasterHidden = status);
    this.toasterService.toasterMessage.subscribe((status) => this.toasterMessage = status);
    this.toasterService.toasterMessageType.subscribe((status) => this.toasterMessageType = status);
  }

  dismissToaster() {
    this.toasterService.dismissToaster();
  }


}
