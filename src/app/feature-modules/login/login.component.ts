/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'shared/models/user.model';
import { LoginService } from 'shared/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    title: string;
    showAlertText = 'none';
    typeAlert: string;
    alertTitleParam: string;
    alertTextParam: string;
    user: User = new User('', '');

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit() {
        this.returnUrl = '/base/products';
    }

    /**
     * Function for logging in, calls the function 'login()'
     * in the LoginService,
     * if the response is true -> Sends you to HomeComponent
     * else Sends you again to Login page
     * @params user: User
     */
    login(user) {
        this.loginService.login(user).subscribe(response => {
            if (response['success']) {
                localStorage.setItem('currentUser', JSON.stringify({
                    email: user.email,
                    token: response['data'].token,
                    id: response['data'].id
                }));
                this.router.navigate([this.returnUrl]);
            } else {
                console.log('fallo.');
            }
        });
    }

    showAlert(typeAlert: string, alertTextParam: string) {
        this.showAlertText = 'yes';
        this.typeAlert = typeAlert;
        this.alertTextParam = alertTextParam;
        setTimeout(() => {
            this.showAlertText = 'none';
        }, 4000);
    }
}
