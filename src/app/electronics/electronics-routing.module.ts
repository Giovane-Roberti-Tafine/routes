import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicDetailComponent } from './electronic-list/electronic-detail/electronic-detail.component';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';

const routes: Routes = [
    { path: 'electronics', component: ElectronicListComponent },
    { path: 'electronics/:index', component: ElectronicDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
