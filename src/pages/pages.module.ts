import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from '../pages/home/home';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {TabsPage} from '../pages/tabs/tabs';
import {TranslateModule} from "@ngx-translate/core";
import {ComponentsModule} from "./components/components.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
    declarations: [
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        TranslateModule,
        ComponentsModule,
        AuthModule,
        IonicPageModule.forChild(HomePage),
    ],
    entryComponents: [
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ]
})
export class PagesModule {
}
