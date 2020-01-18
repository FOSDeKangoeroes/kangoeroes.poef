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

import { DeviceDetectionService } from 'src/app/core/device-detection/device-detection.service';
import { DrinksNavComponent } from '../../components/drinks-nav/drinks-nav.component';
import { DrinksDataService } from '../../shared/drinks-data.service';
import { Tak } from '../../shared/tak.model';
import { Leiding } from '../../shared/leiding.model';
import { Drank } from '../../shared/drank.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CartComponent } from '../../components/cart/cart.component';
import { CartService } from '../../shared/cart.service';
import { CartItem } from '../../shared/cart-item.model';

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
    public dataService: DrinksDataService,
    private bottomSheet: MatBottomSheet,
    private cartService: CartService
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

  addToOrder(leader) {

    if (!this.bottomSheet._openedBottomSheetRef) {
      this.bottomSheet.open(CartComponent);

    }

    const cartItem = new CartItem();

    cartItem.leader = leader;
    cartItem.drink = this.selectedDrink;
    cartItem.quantity = 1;

    this.cartService.addItemToCart(cartItem);

  }

}
