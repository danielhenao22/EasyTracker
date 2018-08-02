import { UsersService } from './../../webservices/users.service';
import { OrdersService } from '../../webservices/orders.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-cards',
  templateUrl: './track-cards.component.html',
  styleUrls: ['./track-cards.component.css']
})
export class TrackCardsComponent implements OnInit {

  orders: any;
  errorMsg: any;

  userLogged = JSON.parse(localStorage.getItem('userLogged'));

  constructor(private router: Router, private _ordersService: OrdersService, private _userServices: UsersService) { }

  getOrders() {
    this._ordersService.getOrders(this.userLogged.user).subscribe((data: any) => {
      this.orders = data;
    }, error => this.errorMsg = error);

    this._userServices.userOrders(this.userLogged.user).subscribe((data: any) => {
      localStorage.setItem('userOrdersInformation', JSON.stringify(data));
    }, error => this.errorMsg = error);
  }

  verifyLogin() {
    if (this.userLogged === null) {
      this.router.navigateByUrl('/start');
    }
  }

  ngOnInit() {
    this.verifyLogin();
    this.getOrders();
  }

}
