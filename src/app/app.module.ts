import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppClientComponent } from './app-client/app-client.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app.routing';
import { AppClientListComponent } from './app-client/app-client-list/app-client-list.component';
import { AppClientNewComponent } from './app-client/app-client-new/app-client-new.component';
import { ClientService } from './app-client/services/client.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
   declarations: [
      AppComponent,
      AppClientComponent,
      AppClientListComponent,
      AppClientNewComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      CommonModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      ReactiveFormsModule,
      AngularFirestoreModule,
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot(),
      SharedModule
   ],
   providers: [ClientService],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [AppClientNewComponent]
})
export class AppModule { }
