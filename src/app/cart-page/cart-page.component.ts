import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartData: cart[] | undefined;
  cartSummary:priceSummary = {
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
}
  constructor(private prodService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.prodService.currentCart().subscribe((result)=>{
      this.cartData = result;
      console.log(this.cartData)
      let price = 0;
      result.forEach((item) => {
        if(item.quantity){
          price = price + (+item.price * +item.quantity)
        }
      })
     this.cartSummary.price = price;
     this.cartSummary.discount = price/10;
     this.cartSummary.tax = price/10;
     this.cartSummary.delivery = 100;
     this.cartSummary.total = price+(price/10)+100-(price/10);
    })    
  }

  checkout(){
    this.route.navigate(['checkout']);
  }
}
