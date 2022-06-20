import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs';
import { CryptoCompareService } from './services/crypto-compare.service';
import { CryptoPrice } from './model/crypto-price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  price$ : Observable<CryptoPrice>;

  // courses;

  constructor(private cryptocompare: CryptoCompareService) {

  }

  ngOnInit() {

    this.price$ = this.cryptocompare.price();
  }



}
