import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {
  }

  navigateToHomePage(){
 this.route.navigate(['home']);
  }

 navigateToProductPage(){
  this.route.navigate(['product'])
  }

  navigateToUserPage(){
    this.route.navigate(['user'])
    }

}
