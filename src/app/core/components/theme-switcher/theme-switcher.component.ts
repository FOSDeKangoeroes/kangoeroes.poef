import { Component, OnInit } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  isDarkTheme: boolean = false;
  constructor(private cssVarService: MaterialCssVarsService) { }

  ngOnInit() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkTheme = true;
    }
  }

  toggleTheme(event) {
    this.cssVarService.setDarkTheme(event.checked);
  }

}
