import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  userLogged = JSON.parse(localStorage.getItem('userLogged'));

  constructor(private router: Router) { }

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    if (this.userLogged != null) {
      this.router.navigateByUrl('/trackCards');
    }
  }

}
