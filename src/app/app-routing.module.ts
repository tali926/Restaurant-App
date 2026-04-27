import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { BagComponent } from './components/bag/bag.component';
import { TrackComponent } from './components/track/track.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'bag', component: BagComponent },
  { path: 'track', component: TrackComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)   
  ],
  exports: [
    RouterModule                
  ]
})
export class AppRoutingModule { }

