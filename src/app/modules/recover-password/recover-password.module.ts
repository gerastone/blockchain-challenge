import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'src/app/core/core.module';
import { RecoverPasswordEffects } from './store/effects/recover-password.effects';
import { EffectsModule } from '@ngrx/effects';
import { RecoverPasswordService } from './services/recover-password.service';
import { RecoverPasswordPage } from './pages/recover-password/recover-password.page';


const routes: Routes = [
    { path: '', component: RecoverPasswordPage },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CoreModule,
        RouterModule.forChild(routes),
        EffectsModule.forRoot([RecoverPasswordEffects])

    ],
    declarations: [
        RecoverPasswordPage,
    ],
    exports: [
    ],
    providers: [
        RecoverPasswordService,
    ]
})
export class RecoverPasswordModule { }