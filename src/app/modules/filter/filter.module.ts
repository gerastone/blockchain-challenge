import { FilterPage } from './page/filter.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'src/app/core/core.module';


const routes: Routes = [  
    { path: '', component: FilterPage }
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoreModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FilterPage
    ],
    exports: [
        FilterPage
    ]
})
export class FilterModule { }