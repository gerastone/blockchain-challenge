import { BlockchainCheckboxComponent } from './components/blockchain-checkbox/blockchain-checkbox.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientInterceptor } from './services/http-interceptor.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { BlockchainButtonComponent } from './components/blockchain-button/blockchain-button.component';
import { BlockchainFooterTabs } from './components/blockchain-footer-tabs/blockchain-footer-tabs.component';
import { BlockchainRangeComponent } from './components/blockchain-range/blockchain-range.component';
import { BlockchainSelectComponent } from './components/blockchain-select/blockchain-select.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            isolate: false
        }),
    ],
    declarations: [
        BlockchainButtonComponent,
        BlockchainFooterTabs,
        BlockchainSelectComponent,
        BlockchainRangeComponent,
        BlockchainCheckboxComponent
    ],
    exports: [
        CommonModule,
        TranslateModule,
        BlockchainButtonComponent,
        BlockchainFooterTabs,
        BlockchainSelectComponent,
        BlockchainRangeComponent,
        BlockchainCheckboxComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpClientInterceptor,
            multi: true
        }]
})
export class CoreModule {

    constructor(private translate: TranslateService) {

        translate.addLangs(["es", "en", "ca"]);
        translate.setDefaultLang('ca');

        let browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|es/) ? browserLang : 'ca')
        translate.use(browserLang.match(/en|es/) ? 'ca' : 'ca')
    }
}
