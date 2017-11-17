import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage({
    name: 'sign-up',
    segment: 'sign-up'
})
@Component({
    selector: 'page-sign-up',
    templateUrl: 'sign-up.html'
})
export class SignUpPage {

    constructor(public navCtrl: NavController) {

    }

    navigateTo(page) {
        this.navCtrl.push(page);
    }
}
