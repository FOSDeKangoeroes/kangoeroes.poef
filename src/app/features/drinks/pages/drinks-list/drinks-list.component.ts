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

import { MatSidenav } from '@angular/material/sidenav';
import { DeviceDetectionService } from 'src/app/core/device-detection/device-detection.service';
import { DrinksNavComponent } from '../../components/drinks-nav/drinks-nav.component';


@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  @ViewChild('takDrawer', { static: false }) takDrawer: DrinksNavComponent;

  constructor(public deviceService: DeviceDetectionService) {}

  ngOnInit() {}


  }

