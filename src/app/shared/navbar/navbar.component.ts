import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  userLogged = JSON.parse(localStorage.getItem('userLogged'));

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/start');
  }

  ngOnInit() {
  }

  getUserLogged(): Observable<any> {
    return of(JSON.parse(localStorage.getItem('userLogged')));
  }

}
