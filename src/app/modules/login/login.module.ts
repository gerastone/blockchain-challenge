import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from 'src/app/core/core.module';
import { LoginPage } from './pages/login.page';
import { LoginService } from './services/login.service';
import { LoginEffects } from './store/effects/login.effects';


const routes: Routes = [
    { path: '', component: LoginPage }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoreModule,
        RouterModule.forChild(routes),
        EffectsModule.forRoot([LoginEffects])
    ],
    declarations: [
        LoginPage
    ],
    exports: [
        LoginPage
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }