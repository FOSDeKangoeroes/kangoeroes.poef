import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [ThemeSwitcherComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ThemeSwitcherComponent]
})
export class ThemeSwitcherModule { }
