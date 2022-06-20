import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoPrice } from '../model/crypto-price';

@Injectable({
  providedIn: 'root'
})
export class CryptoCompareService {

  constructor(private http : HttpClient) { }

  price() : Observable<CryptoPrice> {
    const params = undefined; 
    // new HttpParams()
    // .set("page","1")
    // .set("pageSize","10");

    return this.http.get<CryptoPrice>('/api/cryptos', {params});
  }
}
