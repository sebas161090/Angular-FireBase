import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Client } from '../Interfaces/client';
import { ClientService } from '../services/client.service';
import * as moment from 'moment';


@Component({
  selector: 'app-app-client-new',
  templateUrl: './app-client-new.component.html',
  styleUrls: ['./app-client-new.component.css']
})
export class AppClientNewComponent implements OnInit {

  form: FormGroup;
    client: Client;
    maxDate: any;
    constructor(
        public bsModalRef: BsModalRef,
        private fb: FormBuilder,
        private clientsService: ClientService,
    ) {
        this.createform();
        this.maxDate = new Date();
    }

    ngOnInit() {
        const values: any = this.client;
        if (values) {
            values.birthdate = new Date(moment(this.client.fecha_nacimiento, 'DD/MM/YYYY').format());
            this.form.patchValue({ ...values });
        }
    }

    onClickSave() {
        if (this.form.valid) {
            const values = this.form.value;
            values.birthdate = moment(values.birthdate).format('DD/MM/YYYY');
            if (!this.client) {
                this.clientsService.create(values).then(() => {
                    this.form.reset();
                    this.bsModalRef.hide();
                });
            } /* else {
                this.clientsService.update(this.client.id, values).then(() => {
                    this.bsModalRef.hide();
                    this.form.reset();
                });
            } */
        }
    }

    private createform() {
        this.form = this.fb.group({
            name: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            years: [
                null,
                [
                    Validators.required,
                    Validators.min(1),
                    Validators.max(122),
                ]
            ],
            birthdate: [
                new Date(),
                [Validators.required]
            ]
        });
    }

}
