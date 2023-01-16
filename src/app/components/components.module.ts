import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card/list-card.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    ListCardComponent,
    CardComponent,
    SearchComponent,
    SpinnerComponent
  ],
  exports: [
    ListCardComponent,
    SearchComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
