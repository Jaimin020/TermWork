import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbCrudService } from '../db-crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usearch: string;
  public myPath: string;
  public cDeck: any;
  constructor(private router: Router, private crud: DbCrudService, private cookieService: CookieService) {
   // this.crud.LocationData().subscribe(data => console.log(data[0]['place'][0].place_name));
    this.crud.LocationData().subscribe(data => {
      this.cDeck = data;
      console.log(this.cDeck);
    });
  }
  username = this.cookieService.get('fname');

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    window.onscroll = function() { myFunction(); };
    function myFunction() {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('nav1').style.boxShadow = '0px 10px 50px rgba(0,0,0,0.5)';
      } else {
        document.getElementById('nav1').style.boxShadow = '0px 0px';
      }
    }
  }

  public user_search(): void {
    this.router.navigate(['/location', this.usearch]);
  }
  public goto(i): void {
    this.router.navigate(['/location', i]);
  }
}
