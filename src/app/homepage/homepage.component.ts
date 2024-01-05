import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(public cart:CartService) {}

}
