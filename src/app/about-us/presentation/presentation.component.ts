import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  lat = 4.544977;
  lng = -75.662314;
  zoom = 13;

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
