import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Client } from '../Interfaces/client';
import { ClientService } from '../services/client.service';
import * as moment from 'moment';

@Component({
  selector: 'app-app-client-edit',
  templateUrl: './app-client-edit.component.html'
})
export class AppClientEditComponent implements OnInit {
  form: FormGroup;
  client: Client;
  maxDate: any;
  constructor(
    public bsModalRef: BsModalRef,
      private fb: FormBuilder,
      private clientsService: ClientService,
  ) {
    this.createform();
  }

  ngOnInit() {
    const values: any = this.client;
        if (values) {
            values.birthdate = new Date(moment(this.client.birthdate, 'DD/MM/YYYY').format());
            this.form.patchValue({ ...values });
        }
  }

  onClickSave() {
    if (this.form.valid) {
        const values = this.form.value;
        values.birthdate = moment(values.birthdate).format('DD/MM/YYYY');
        if (this.client) {
            this.clientsService.update(this.client.id, values).then(() => {
              this.bsModalRef.hide();
              this.form.reset();
          });
        }
    }
}

  private createform() {
    this.form = this.fb.group({
        name: [null, null],
        lastName: [null, null],
        years: [null, null],
        birthdate: [ new Date(), null]
    });
}

}
