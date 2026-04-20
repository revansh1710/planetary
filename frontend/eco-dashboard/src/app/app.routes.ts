import { Routes } from '@angular/router';
import {Dashboard} from '../app/features/dashboard/dashboard'
import {Homepage} from './ui/homepage/homepage'
export const routes: Routes = [
    {path:'',component:Homepage},
    {path:'dashboard',component:Dashboard}
];
