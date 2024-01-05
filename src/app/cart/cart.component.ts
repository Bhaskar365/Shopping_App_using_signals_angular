import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../models/models';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems : IProduct[] = [];

  constructor(public cart:CartService, public api:ApiService) { }

  ngOnInit(): void {
    
  }

  remove(i:number) {
    this.cart.removeProductSignal(i);
  }

  addToCart(product:IProduct) {
    console.log(product)
    this.cart.addProductSignal(product);
  }

}

