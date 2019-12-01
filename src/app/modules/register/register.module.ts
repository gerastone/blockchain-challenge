import { RegisterPage } from './pages/register/register.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'src/app/core/core.module';
import { ValidateAccountPage } from './pages/validate-account/validate-account.page';
import { RegisterEffects } from './store/effects/register.effects';
import { EffectsModule } from '@ngrx/effects';
import { RegisterService } from './services/register.service';
import { ModalCardComponent } from './components/modal-card/modal-card';
import { ValidationCodeService } from './services/validate-code.service';


const routes: Routes = [
    { path: '', component: RegisterPage },
    { path: 'validate-account', component: ValidateAccountPage }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoreModule,
        RouterModule.forChild(routes),
        EffectsModule.forRoot([RegisterEffects])

    ],
    declarations: [
        RegisterPage,
        ValidateAccountPage,
        ModalCardComponent
    ],
    exports: [
    ],
    providers: [
        RegisterService,
        ValidationCodeService
    ],
    entryComponents: [
        ModalCardComponent
    ]
})
export class RegisterModule { }