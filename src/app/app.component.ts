import { Component, OnDestroy } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';
import { ThemeSwitcherService } from './core/components/theme-switcher/theme-switcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'kangoeroes-poef';
  private switcherSubscription: Subscription;

  constructor(
    public materialCssVarsService: MaterialCssVarsService,
    private switcherService: ThemeSwitcherService
  ) {
    const primary = '#253480';
    const secondary = '#b3ddff';
    this.materialCssVarsService.setPrimaryColor(primary);
    this.materialCssVarsService.setAccentColor(secondary);
    this.switcherService.initTheme();
    this.switcherSubscription = this.switcherService.isDarkTheme$.subscribe(
      res => {
        this.materialCssVarsService.setDarkTheme(res);
      }
    );
  }

  ngOnDestroy(): void {
   this.switcherSubscription.unsubscribe();
  }
}
