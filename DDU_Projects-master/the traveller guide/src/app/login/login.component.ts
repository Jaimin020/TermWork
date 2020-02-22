import { Component, OnInit } from '@angular/core';
import { DbCrudService } from '../db-crud.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { user } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isOn = false;
  public fname: string;
  public pass: string;
  public rfname: string;
  public rpass: string;
  public rcpass: string;
  public remail: string;
  public msg: string;
  public isValid = true;
  public isLogin = true;
  public risValid = true;

  constructor(private crud: DbCrudService, private router: Router, private cookieService: CookieService) {
    console.log(router.url);
    var t = router.url;
    console.log(t);
    if (t === '/login') {
      this.isLogin = true;
    } else if (t === '/register') {
      this.isLogin = false;
    } else {
      cookieService.delete('fname');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

  }
  public check_user(): void {
    // console.log("uname:"+this.uname +"Password:"+ this.password)
    var uo = new user(this.fname, this.pass);

    this.crud.loginData('User_Login', JSON.stringify(uo)).subscribe(data => {
      console.log(data);
      if (data.check === 't') {
        // console.log("valid")
        this.isValid = true;
        this.cookieService.set('fname', this.fname);
        this.router.navigate(['/home']);
      } else {
        // console.log("Invalid");
        this.isValid = false;
      }
    });

  }
  public Register(): void {
    this.router.navigate(['/register']);
  }
  public mlogin(): void {
    this.router.navigate(['/login']);
  }
  public register_user(): void {
    if (this.rfname == null) {
      this.msg = 'Please Enter a UserName';
      this.risValid = false;
    } else if (this.rcpass == null || this.rpass == null) {
      this.msg = 'Please Enter a Password';
      this.risValid = false;
    } else if (this.rcpass === this.rpass) {
      this.risValid = true;
      var uo = new user(this.rfname, this.rpass, this.remail);
      this.crud.InsertData('User_Login', JSON.stringify(uo)).subscribe(data => console.log(data));
      this.router.navigate(['/login']);
    } else {
      this.msg = 'Enter correct Confirm Password';
      this.risValid = false;
    }
  }

}
