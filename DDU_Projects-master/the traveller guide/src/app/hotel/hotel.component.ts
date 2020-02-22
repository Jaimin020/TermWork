import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbCrudService } from '../db-crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  cards = [ {name: 'assets/src1.jpg', title: 'OYO', link: '#', details: 'Fine'},
            {name: 'assets/src1.jpg', title: 'TGB', link: '#', details: 'Fine'},
            {name: 'assets/src1.jpg', title: 'Grand Hyatt', link: '#', details: 'Fine'},
            {name: 'assets/src1.jpg', title: 'Taj', link: '#', details: 'Fine'},
            {name: 'assets/src1.jpg', title: 'Club Mahindra', link: '#', details: 'Fine'}
          ];
  result: any;
  city: string;
  constructor(private router: Router, private route: ActivatedRoute, private crud: DbCrudService, private cookieService: CookieService) { }
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
    this.city = this.route.snapshot.paramMap.get('chart');
    this.crud.LocationData().subscribe(data => {
      data.forEach(element => {
        if (element.city.includes(this.city)) {
          console.log(element);
          this.result = element;
        }
      });
    });
  }
  public getHotel(x): void {
    this.router.navigate(['/hotel', x]);
  }
  public getPlace(x): void {
    this.router.navigate(['/location', x]);
  }
}
