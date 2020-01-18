import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { MaterialCssVarsModule } from 'angular-material-css-vars';
import { ThemeSwitcherModule } from './core/components/theme-switcher/theme-switcher.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    MaterialCssVarsModule.forRoot({
      isAutoContrast: true,
      darkThemeClass: 'isDarkTheme',
      lightThemeClass: 'isLightTheme'
    }),
    ThemeSwitcherModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: '2500',
      horizontalPosition: 'right'
    }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
