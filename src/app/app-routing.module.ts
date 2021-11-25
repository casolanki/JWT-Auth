import { TodosComponent } from './animation/todos/todos.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './_helpers/admin-auth.gaurd';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'order', component: OrderComponent,canActivate: [AuthGuard] },
    { path: 'todos', component: TodosComponent,canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent,canActivate: [AdminAuthGuard] },
    { path: 'no-access', component: NoAccessComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
       
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
