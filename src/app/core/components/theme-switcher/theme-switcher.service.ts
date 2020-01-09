import { Injectable } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private storageKey = 'POEF_THEME';
  private isDarkThemeSource = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSource.asObservable();

  constructor(private cssVarService: MaterialCssVarsService) {

   }

  initTheme() {
    const itemInStorage = localStorage.getItem(this.storageKey);

    if (!itemInStorage) {
      this.checkBrowserTheme();
    } else {
      const storageValue = JSON.parse(itemInStorage);
      this.isDarkThemeSource.next(storageValue);
    }
  }

  toggleTheme(newValue: boolean) {
    this.isDarkThemeSource.next(newValue);
    localStorage.setItem(this.storageKey, JSON.stringify(newValue));
  }

  private checkBrowserTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkThemeSource.next(true);
    }
  }


}
