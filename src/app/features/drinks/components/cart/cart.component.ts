import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
