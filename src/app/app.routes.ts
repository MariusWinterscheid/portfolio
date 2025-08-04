import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './shared/components/privacy/privacy.component';
import { LegalComponent } from './shared/components/legal/legal.component';

export const routes: Routes = [
    {path:'', component: MainComponent},
    {path:'imprint', component: PrivacyComponent},
    {path:'legal', component: LegalComponent},
];
