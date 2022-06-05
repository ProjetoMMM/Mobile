import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

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
