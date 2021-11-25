import { NoAccessComponent } from './no-access/no-access.component';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Animation
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; //No Animation
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { TodosComponent } from './animation/todos/todos.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        OrderComponent ,
        AdminComponent ,
        NoAccessComponent
,
        TodosComponent         ],
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
