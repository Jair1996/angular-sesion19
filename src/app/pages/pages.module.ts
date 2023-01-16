import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    DetailPageComponent
  ],
  exports: [
    HomePageComponent,
    DetailPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
