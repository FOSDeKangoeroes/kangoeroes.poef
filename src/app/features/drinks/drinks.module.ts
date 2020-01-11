import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksListComponent } from './pages/drinks-list/drinks-list.component';
import { DrinksRoutingModule } from './drinks-routing.module';
import { TakListComponent } from './components/tak-list/tak-list.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { PoefCardComponent } from './components/poef-card/poef-card.component';
import { FlexLayoutModule, GridModule } from '@angular/flex-layout';
import { DrinksNavComponent } from './components/drinks-nav/drinks-nav.component';



@NgModule({
  declarations: [DrinksListComponent, TakListComponent, PoefCardComponent, DrinksNavComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    GridModule
  ]
})
export class DrinksModule { }
