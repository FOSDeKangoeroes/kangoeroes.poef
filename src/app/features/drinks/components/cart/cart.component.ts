import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DrinksDataService } from '../../shared/drinks-data.service';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild('submitButton', {static: true}) submitButton: MatButton;

  constructor(
    public cartService: CartService,
    private bottomSheet: MatBottomSheetRef,
    private dataService: DrinksDataService,
    private snackbar: MatSnackBar,
    ) { }

  ngOnInit() {
  }

  clear() {
    this.bottomSheet.dismiss();
    this.cartService.clearCart();
  }

  submit() {
    const itemsInCart = this.cartService.cartItems;

    const orderlines = itemsInCart.map(item => {
      return {
        drankId: item.drink.id,
        orderedForId: item.leader.id,
        quantity: item.quantity
      };
    });

    const order = {
      orderlines
    };

    this.dataService.submitOrder(order).subscribe(res => {
      this.cartService.clearCart();
      this.bottomSheet.dismiss();
      this.snackbar.open('Bestelling succesvol toegevoegd!');
    });

  }

}
