import {NgModule} from '@angular/core';
import {LanguageService} from "./services/language.service";
import {SharedService} from "./services/shared.service";

@NgModule({
    providers: [
        LanguageService,
        SharedService
    ],
    imports: []
})
export class ServicesModule {
}
