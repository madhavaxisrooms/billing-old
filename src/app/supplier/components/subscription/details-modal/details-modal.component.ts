import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {
  @Input() userDetails;
  @Output() hideModal = new EventEmitter<boolean>();
  public ruleSentence: string; 
  constructor() { }

  ngOnInit() {
  }

  closeModal(){        
    this.hideModal.emit(true);
  }

}
