import { Component, OnInit, Input, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { DeviceDetectionService } from 'src/app/core/device-detection/device-detection.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Drank } from '../../shared/drank.model';
import { Tak } from '../../shared/tak.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-drinks-nav',
  templateUrl: './drinks-nav.component.html',
  styleUrls: ['./drinks-nav.component.scss']
})
export class DrinksNavComponent implements OnInit, AfterViewInit {

  @Input() showBackButton = false;
  @Input() items: Tak[] | Drank[];
  @Input() title: string;
  @Input() topDrawer: MatSidenav;

  @ViewChild('drawer', {static: false}) drawer: MatSidenav;

  @Output() selectedItem = new EventEmitter<number>();

  isLockedOpen = true;
  selectedItemId: number;

  constructor(public deviceService: DeviceDetectionService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.deviceService.isHandset$.subscribe(res => {
      this.drawer.open();
      this.isLockedOpen = !res;
    });

  }

  onItemClick(itemId) {

    if (!this.isLockedOpen) {
      this.drawer.close();
    }
    
    this.selectedItemId = itemId;

    this.selectedItem.emit(itemId);

  }

  back() {
    if (!this.topDrawer) {
      throw new Error('No topDrawer input was provided to go back to.');
    }

    this.topDrawer.open();
  }




}
