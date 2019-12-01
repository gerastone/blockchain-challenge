import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { HelpPage } from './pages/help/help.page';


const routes: Routes = [
  { path: '', component: HelpPage }
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
    HelpPage,
  ],
  exports: [
    RouterModule
  ]
})
export class HelpModule { }
