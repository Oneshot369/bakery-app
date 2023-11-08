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
  public updateProducts(product: Product, callback: () => void): void{

    this.http.put<Product[]>(this.host + "/products", product)
    .subscribe((data) => {
      console.log("UpdateProductAPI: ",data);
      callback();
    });
  }
  public deleteProducts(product:Product , callback: () => void): void{

    this.http.delete<Product[]>(this.host + "/products/" + product.ID)
    .subscribe((data) => {
      console.log("DeleteProductAPI: ",data);
      callback();
    });
  }
  public addProduct(product:Product, callback: () => void): void{
    this.http.post<Product[]>(this.host + "/products", product)
    .subscribe((data) => {
      console.log("addProductAPI: ",data);
      callback();
    });
  }
}
