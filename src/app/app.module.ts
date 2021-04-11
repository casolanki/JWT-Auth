import { NoAccessComponent } from './no-access/no-access.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        OrderComponent ,
        AdminComponent ,
        NoAccessComponent
         ],
    providers:
     [
        
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        

        // provider used to create fake backend
        fakeBackendProvider
     
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }