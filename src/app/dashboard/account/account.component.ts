import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../webservices/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _userService: UsersService) {
    this.date = Date.now();
  }

  userLogged = JSON.parse(localStorage.getItem('userLogged'));
  userOrdersInformation = JSON.parse(localStorage.getItem('userOrdersInformation'));
  date: number;
  userOrders: any;
  errorMsg: any;

  ngOnInit() {
  }
}
