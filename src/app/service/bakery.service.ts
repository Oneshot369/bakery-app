import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  private host = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  public getProducts(callback: (artists: Product[]) => void): void{

    this.http.get<Product[]>(this.host + "/products")
    .subscribe((artists: Product[]) => {
      callback(artists);
    });
  }
}
