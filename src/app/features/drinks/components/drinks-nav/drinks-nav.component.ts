import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { DeviceDetectionService } from 'src/app/core/device-detection/device-detection.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-drinks-nav',
  templateUrl: './drinks-nav.component.html',
  styleUrls: ['./drinks-nav.component.scss']
})
export class DrinksNavComponent implements OnInit, AfterViewInit {

  @Input() showBackButton = false;
  @Input() items;

  @Input() topDrawer: MatSidenav;

  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

  isLockedOpen = true;
 
  constructor(public deviceService: DeviceDetectionService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.deviceService.isHandset$.subscribe(res => {
      this.drawer.open();
      this.isLockedOpen = !res;
    });

  }

  onItemClick() {

    if(!this.isLockedOpen) {
      this.drawer.close();
    }

  }

  back() {
    if(!this.topDrawer) {
      throw new Error('No topDrawer input was provided to go back to.');
    }

    this.topDrawer.open();
  }




}
