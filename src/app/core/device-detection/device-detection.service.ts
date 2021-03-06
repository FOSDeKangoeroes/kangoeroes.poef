import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
