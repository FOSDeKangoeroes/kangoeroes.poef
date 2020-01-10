import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksListComponent } from './pages/drinks-list/drinks-list.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import { TakListComponent } from './components/tak-list/tak-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [DrinksListComponent, TakListComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    MaterialModule
  ]
})
export class DrinksModule { }
