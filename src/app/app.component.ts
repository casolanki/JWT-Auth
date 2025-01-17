﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(
            x => this.currentUser = x
            );
    }

    isAdmin(){
      return this.currentUser!.userRole=="admin";
    } 

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    order() {        
        this.router.navigate(['/order']);
    }
    admin() {        
        this.router.navigate(['/admin']);
    }
    todo(){
        this.router.navigate(['/todos']);
    }
}