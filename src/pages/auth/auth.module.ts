import {NgModule} from '@angular/core';
import {SignUpPageModule} from "./sign-up/sign-up.module";
import {SignUpSellBuyPageModule} from "./sign-up-sell-buy/sign-up-sell-buy.module";

@NgModule({
    declarations: [],
    imports: [
        SignUpPageModule,
        SignUpSellBuyPageModule
    ],
    entryComponents: []
})
export class AuthModule {
}
