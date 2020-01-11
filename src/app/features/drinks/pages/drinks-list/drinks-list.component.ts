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
import { DrinksDataService } from '../../shared/drinks-data.service';
import { Observable } from 'rxjs';
import { Tak } from '../../shared/tak.model';
import { Leiding } from '../../shared/leiding.model';
import { Drank } from '../../shared/drank.model';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  @ViewChild('takDrawer', { static: false }) takDrawer: DrinksNavComponent;

  takken: Tak[];
  leiding: Leiding[];
  drinks: Drank[];

  selectedTak: Tak;
  selectedDrink: Drank;
  constructor(
    public deviceService: DeviceDetectionService,
    public dataService: DrinksDataService
  ) {}

  ngOnInit() {
    this.dataService.takken().subscribe(res => {
      res.sort((a, b) => a.order - b.order);
      this.takken = res;
    });

    this.dataService.drinks().subscribe(res => {
      this.drinks = res;
    });
  }

  selectTak(takId: number) {
    this.dataService.leiding(takId).subscribe(res => {
      this.leiding = res;
    });
    this.selectedTak = this.takken.find(item => {
      return item.id === takId;
    });
  }

  selectDrink(drinkId: number) {
    this.selectedDrink = this.drinks.find(item => {
      return item.id === drinkId;
    });
  }
}
