import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Form, FormGroup } from '@angular/forms';
import { LoginForm } from "../../models/loginform";
// import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, form: LoginForm) { }
  getLogin(form: LoginForm):void {
    let username = form.email;
    let password = form.password;
    // this.loginService.getAuthenticate(form).subscribe(() => {
    //   this.router.navigate(['/calender']);
    // })
  }

  ngOnInit() {
  }
}
