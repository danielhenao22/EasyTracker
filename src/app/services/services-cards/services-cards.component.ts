import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-cards',
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.css']
})
export class ServicesCardsComponent implements OnInit {

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
