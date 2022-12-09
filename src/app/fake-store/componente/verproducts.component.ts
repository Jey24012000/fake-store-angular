import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/fake-store/service/api.service";
import { IProducts } from "../store.model";

@Component({
  selector: "app-verproducts",
  templateUrl: "./verproducts.component.html",
  styleUrls: ["./verproducts.component.css"]
})
export class VerProductsComponent implements OnInit {
  public products: IProducts = {id: 0, title: '', price: 0, description: '', category: '', image: '', rating: []};
  public arreglo: any =[];
  productos_carrito = 0;
  titles: string[] = [];
  prices: number[]= [];
  precio = 0;
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getResponse().subscribe((products) => {

      let arreglo = products;
      this.arreglo = arreglo;
      console.log(arreglo);
      
    });
    console.log('resultado hecho')
    
  }
  
  agregarCarrito(title:string,price: number){
    this.productos_carrito += 1;
    this.titles.push(title)
    
    this.prices.push(price);
    this.precio += price;
    
  }
  deleteCarrito(i:number){
    this.titles.splice(i, 1);
    this.precio -= this.prices[i];
    this.prices.splice(i,1);
    this.productos_carrito -= 1;
  }
  
}
