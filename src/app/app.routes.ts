import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactUsComponent,
    },
    {
        path:'services',
        component:ServicesComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    },
    {
        path:'portfolio',
        component:PortfolioComponent,
    }
];
