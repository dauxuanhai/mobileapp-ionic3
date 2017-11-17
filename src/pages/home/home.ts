import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LanguageService} from "../../services/services/language.service";
import {SharedService} from "../../services/services/shared.service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    showLanguageChooser = true;

    constructor(public navCtrl: NavController,
                public sharedService: SharedService,
                public languageService: LanguageService) {
    }

    setLanguage(lang) {
        this.showLanguageChooser = false;
        this.languageService.setLanguage(lang);
    }

    loginAsGuest = function() {
        this.sharedService.isGuest = true;
        //TODO
        //$state.go('app.browse');
    };

    navigateTo(page) {
        this.navCtrl.push(page);
    }
}
