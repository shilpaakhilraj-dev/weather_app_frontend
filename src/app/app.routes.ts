import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'weather',
        loadComponent: () => import('./weather/weather.component').then(m => m.WeatherComponent)
    }
];
