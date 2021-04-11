import { RouterModule } from '@angular/router';
export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    token?: string;
    userRole: string;
}