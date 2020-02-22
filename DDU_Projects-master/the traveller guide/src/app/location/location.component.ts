import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DbCrudService } from '../db-crud.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public usearch: string;
  // tslint:disable-next-line: max-line-length
  locateNames = ['/assets/img/im1.jpg', '/assets/img/im2.jpg', '/assets/img/im3.jpg', '/assets/img/im4.jpg', '/assets/img/image1.jpg', '/assets/img/image1.jpg', '/assets/img/image1.jpg', '/assets/img/image1.jpg', '/assets/img/image1.jpg', '/assets/img/image1.jpg'];
  cardNames = ['/assets/img/im2.jpg', '/assets/img/im3.jpg', '/assets/img/im4.jpg', '/assets/img/im5.jpg'];
  result: any;
  city: string;
  constructor(private route: ActivatedRoute, private crud: DbCrudService, private router: Router, private cookieService: CookieService) { }
  username = this.cookieService.get('fname');
  ngOnInit() {
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
    public user_search(): void {
    this.router.navigate(['/location', this.usearch]);
  }
  public getHotel(x): void {
    this.router.navigate(['/hotel', x]);
  }
  public getPlace(x): void {
    this.router.navigate(['/location', x]);
  }
}

