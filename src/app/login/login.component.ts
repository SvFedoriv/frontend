import { Component } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = new User();
  errorMessage = "Es wurden falsche Daten eingegeben";
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private loginserviceservice: LoginServiceService){
    this.successMessage = "";
  }

  login() {
    console.log(this.user);
    this.loginserviceservice.login(this.user).subscribe((result)=>{
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = "Ihre Eingabe war korrekt!";
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
