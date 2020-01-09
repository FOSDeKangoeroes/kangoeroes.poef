import { Component } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kangoeroes-poef';

  constructor(public materialCssVarsService: MaterialCssVarsService) {
    const primary = '#1a214f';
    //this.materialCssVarsService.setDarkTheme(false);
    this.materialCssVarsService.setPrimaryColor(primary);
    this.materialCssVarsService.setAccentColor('white');
  }
}
