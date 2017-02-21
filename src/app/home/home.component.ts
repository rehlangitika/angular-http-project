import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl:'./app/home/home.component.html',
  styleUrls:['']
})

export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(){

  }
  goToLogin() {
    this.router.navigate(['login'])
  }

  sendRouteParams() {
    this.router.navigate(['details',1])
  }
}
