import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit, AfterViewInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLockedOpen = true;

  @ViewChild('takDrawer', { static: false }) takDrawer: MatSidenav;

  @ViewChild('drankDrawer', { static: false }) drankDrawer: MatSidenav;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.isHandset$.subscribe(res => {
      console.log(res);
      this.drankDrawer.open();
      this.takDrawer.open();
      this.isLockedOpen = !res;
    });
  }

  onTakClick() {
    this.closeSideNav(this.takDrawer);
  }

  onDrinkClick() {
   this.closeSideNav(this.drankDrawer);
  }

  private closeSideNav(nav: MatSidenav) {
    if(!this.isLockedOpen) {
      nav.close();
    }
  }
}
