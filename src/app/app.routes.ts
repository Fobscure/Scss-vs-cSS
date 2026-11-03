import { Routes } from '@angular/router';

import { Page1Css } from './pages/page1-css/page1-css';
import { Page2Sass } from './pages/page2-sass/page2-sass';
import { Page3Scss } from './pages/page3-scss/page3-scss';

export const routes: Routes = [
  { path: 'page1-css', component: Page1Css },
  { path: 'page2-sass', component: Page2Sass },
  { path: 'page3-scss', component: Page3Scss }
];