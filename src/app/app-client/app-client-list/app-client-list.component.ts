import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AppClientNewComponent } from '../app-client-new/app-client-new.component';
import * as moment from 'moment';
import { Client } from '../Interfaces/client';
import { ClientService } from '../services/client.service';
import { AppClientEditComponent } from '../app-client-edit/app-client-edit.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './app-client-list.component.html'
})
export class AppClientListComponent implements OnInit {
  listClients: Client[] = [];
  @Input() hasProjection = false;
  constructor(
      private clientsService: ClientService,
      private bsModalRef: BsModalService,
  ) {}

  ngOnInit() {
      this.searchClients();
  }

  onClickDelete(item: any) {
    this.clientsService.delete(item.id).then(() => {
    });
  }

  onClickEdit(client: any) {
    const initialState: any = {};
      if (client) {
          initialState.client = client;
      }
      this.bsModalRef.show(AppClientEditComponent, {
          class: 'modal-dialog-centered',
          initialState
      });
  }

  getRenderDate(date: any) {
      return moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY');
  }

  getProbablyDeathDate(date: any) {
      const birthdate = moment(date, 'DD/MM/YYYY').year();
      const yearNow = moment().year();
      const yearsDeath = 75 - (birthdate - yearNow);
      return moment(date, 'DD/MM/YYYY')
          .add(yearsDeath, 'years')
          .format('DD/MM/YYYY');
  }

  openForm() {
    const initialState: any = {};
    this.bsModalRef.show(AppClientNewComponent, {
        class: 'modal-dialog-centered',
        initialState
    });
  }

  AverageCalculate() {
    if (this.listClients.length) {
        const total = this.getNumberClients();
        return total / this.listClients.length;
    }
    return 0;
  }

StandardDeviationCalculate() {
    if (this.listClients.length > 0) {
        const numberClients = this.getNumberClients();
        const media = numberClients / this.listClients.length;
        let suma = 0;
        for (const item of this.listClients) {
          suma +=
                (Number(item.years) - media) *
                (Number(item.years) - media);
        }
        const vari = suma / this.listClients.length;
        return Math.sqrt(vari);
    }
    return 0;
}

  private searchClients() {
      this.clientsService.all().subscribe((res: Client[]) => {
          this.listClients = res;
      });
  }

  private getNumberClients() {
    let suma = 0;
    for (const item of this.listClients) {
        suma += Number(item.years);
    }
    return suma;
  }
}