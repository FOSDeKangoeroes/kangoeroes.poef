import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: CartItem[] = [];
  public items = new Subject<CartItem[]>();

  constructor() { }

  getProducts(): Observable<CartItem[]> {
    return this.items.asObservable();
  }

  setProducts(items: CartItem[]) {
    this.cartItems.push(...items);
    this.items.next(items);
  }

  addItemToCart(item: CartItem) {
    const itemInCart = this.cartItems.find(res => res.drinkName === item.drinkName && res.leaderName === item.leaderName);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      this.cartItems.push(item);
    }

    this.items.next(this.cartItems);
  }

  removeItemFromCart(item: CartItem) {

  }

  clearCart() {
    this.cartItems = [];
    this.items.next(this.cartItems);
  }
}
