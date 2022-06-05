import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  signUPUser(){
 this.router.navigate(['login']);
  }
}
