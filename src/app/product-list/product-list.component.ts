import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/models';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  constructor(public api:ApiService, private cart:CartService) { }

  ngOnInit(): void { }

  addToCart(product:IProduct) {
      this.cart.addProductSignal(product);
   }
  }
