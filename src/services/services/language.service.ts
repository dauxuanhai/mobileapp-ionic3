import {Injectable} from "@angular/core";
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    public lang = 'en';

    constructor(public translate: TranslateService) {

    }

    setLanguage(lang) {
        this.lang = lang;
        window.localStorage.setItem('lang', lang);
        this.translate.use(this.lang);
        this.setTextDirection(this.lang);
    }

    setTextDirection(lang) {
        if (lang == 'ar') {
            document.body.style.direction = "rtl";
        } else {
            document.body.style.direction = "ltr";
        }
    }
}
