import { Injectable } from "@angular/core";
import { IProducts } from "../store.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private products: IProducts = {id: 0, title: '', price: 0, description: '', category: '', image: '', rating: []}
  // public numero: number = Math.round(Math.random()*20);

  // private API = `https://fakestoreapi.com/products/${this.numero}`;
  private API = 'https://fakestoreapi.com/products/';


  constructor(private http: HttpClient){}

  public getResponse(): Observable<IProducts> {
    return this.http.get<IProducts>(this.API);
  }
}
