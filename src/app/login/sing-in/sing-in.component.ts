import { UserLoginOutput } from '../../model/UserLoginOutput';
import { UsersService } from '../../webservices/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  user: UserLoginOutput = new UserLoginOutput();
  public errorMsg;
  loginForm: FormGroup;
  username: string;

  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onRegister() {
    this.router.navigateByUrl('/register');

  }

  onLogin() {
    this._usersService.login(this.user).subscribe((data: UserLoginOutput) => {
      localStorage.setItem('userLogged', JSON.stringify(data));
    }, error => this.errorMsg = error);
    setTimeout(() => {
      this.router.navigateByUrl('/trackCards');
    }, 1000);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
