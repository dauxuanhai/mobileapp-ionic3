import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SignUpPage} from "./sign-up";
import {ComponentsModule} from "../../components/components.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        SignUpPage,
    ],
    imports: [
        TranslateModule,
        ComponentsModule,
        IonicPageModule.forChild(SignUpPage),
    ],
})
export class SignUpPageModule {
}
