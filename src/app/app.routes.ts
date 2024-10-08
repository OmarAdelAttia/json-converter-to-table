import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JsonTableComponent } from './components/json-table/json-table.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "jsonTable", component: JsonTableComponent, canActivate: [AuthGuard] },
];
