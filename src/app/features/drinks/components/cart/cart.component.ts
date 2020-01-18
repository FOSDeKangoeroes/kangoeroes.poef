import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-order',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private bottomSheet: MatBottomSheetRef) { }

  ngOnInit() {
  }

  clear() {
    this.bottomSheet.dismiss();
    this.cartService.clearCart();
  }

}
