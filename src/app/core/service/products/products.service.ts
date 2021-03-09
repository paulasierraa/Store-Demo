import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Product} from '@models/product.model';
import * as Sentry from '@sentry/angular';

import {environment} from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {map, catchError,retry} from 'rxjs/operators';
interface User{
  email: string;
  gender: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  // CREACIÓN DE URL PARA UNA API


  constructor(private http: HttpClient) { // inyecto la dependencia

   }
  getAllProducts()
  {
    // resuelve un array de tipo product
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id:string):Observable<Product>
  {
    // resuelve un objeto de producto
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product:Product)
  {
      return this.http.post(`${environment.url_api}/products/`,product);
  }

  updateProduct(id:string,changes:Partial<Product>) //queremos solo una parte del producto
  {
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }
  deleteProduct(id:string)
  {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  getRandomUsers(): Observable<User[]>{
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3), // lanza 3 veces la petición si después de eso contesta el servidor lanza el handle error
      catchError(error => {
        return this.handleError(error);
      }),
      // map((response: any) => response.results as User[]) todos los datos que trae el JSON
      map((response: any) => {
        const user: User[] = [];
        response.results.forEach((element: { email: any; gender: any; phone: any; }) => { // Unos datos especificos
          user.push({
            email: element.email,
            gender: element.gender,
            phone: element.phone,
          });
        });
        return user;
      })
    );
  }

  getFile()  // Obteniendo un archivo
  {
    return this.http.get('assets/files/test.txt',{responseType:'text'}); //saber que obtendremos un archivo de tipo texto
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    Sentry.captureException(error);
    return throwError("algo salió mal");
  }
}
/**
 * products:Product[] =[
    {
     
      id: '1',
      image: 'assets/images/hoodie.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.webp',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
    ];
 */