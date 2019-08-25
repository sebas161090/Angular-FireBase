import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AppClientNewComponent } from '../app-client-new/app-client-new.component';

@Component({
  selector: 'app-app-client-list',
  templateUrl: './app-client-list.component.html',
  styleUrls: ['./app-client-list.component.css']
})
export class AppClientListComponent implements OnInit {

  constructor(private bsModalRef: BsModalService) { }

  ngOnInit() {
  }
  onClickModal() {
    console.log('Modal Call');
    const initialState: any = {};

    this.bsModalRef.show(AppClientNewComponent, {
        class: 'modal-dialog-centered',
        initialState
    });
  }
}
