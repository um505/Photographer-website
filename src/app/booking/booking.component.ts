import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  products = products;
  constructor(private cartService: CartService) { }

  addToCart(product) {
    window.alert('You almost booked a Photoshooting!');
    this.cartService.addToCart(product);
  }
 
  ngOnInit(): void {
  }

}
