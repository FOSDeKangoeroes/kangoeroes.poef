import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksListComponent } from './pages/drinks-list/drinks-list.component';
import { DrinksRoutingModule } from './drinks-routing.module';



@NgModule({
  declarations: [DrinksListComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule
  ]
})
export class DrinksModule { }
