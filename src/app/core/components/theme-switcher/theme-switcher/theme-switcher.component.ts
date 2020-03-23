import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';
import { ThemeSwitcherService } from '../theme-switcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  isDarkTheme: boolean = false;

  @Input() text: string;
  private switcherSubscription: Subscription;
  constructor(private switcherService: ThemeSwitcherService) {}

  ngOnInit() {
   this.switcherSubscription = this.switcherService.isDarkTheme$.subscribe(res => {
      this.isDarkTheme = res;
    });
  }

  toggleTheme(event) {
    this.switcherService.toggleTheme(event.checked);
  }

  ngOnDestroy(): void {
    this.switcherSubscription.unsubscribe();
  }
}
