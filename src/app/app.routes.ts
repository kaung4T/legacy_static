import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    
    // { path: 'setting', component: HomeComponent },
    // { path: 'setting/:id', component: HomeComponent },
    // { path: '**', component: HomeComponent }
];
