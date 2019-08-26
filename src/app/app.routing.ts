import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppClientComponent } from './app-client/app-client.component';
import { AppClientProjectionComponent } from './app-client/app-client-projection/app-client-projection.component';

const routes: Routes = [
    {
        path: '',
        component: AppClientComponent
    },
    {
        path: 'projection',
        component: AppClientProjectionComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
