import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const components = [
    NavbarComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: components,
    exports: components
})
export class SharedModule { }