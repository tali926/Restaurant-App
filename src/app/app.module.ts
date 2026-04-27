import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SiteComponent } from './components/site/site.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { BagComponent } from './components/bag/bag.component';
import { TrackComponent } from './components/track/track.component';
import { AppRoutingModule } from './app-routing.module';
import { DollarsPipe } from './pipes/dollars.pipe';
import { DepartmentColorPipe } from './pipes/department-color.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ItemsComponent } from './components/products/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    NavComponent,
    AboutComponent,
    ProductsComponent,
    BagComponent,
    TrackComponent,
    DollarsPipe,
    DepartmentColorPipe,
    DialogComponent,
    DialogComponent,
    ItemsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
   MatDialogModule ,
     MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

