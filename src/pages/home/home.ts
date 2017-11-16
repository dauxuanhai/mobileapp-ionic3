import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    lang: string = 'en';

    constructor(public navCtrl: NavController,
                public translate: TranslateService) {

    }

    switchLanguage(lang) {
        this.lang = (lang == 'en') ? 'ar' : 'en';
        this.translate.use(this.lang);
    }
}
