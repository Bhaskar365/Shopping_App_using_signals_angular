import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { IProduct } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public products = toSignal<IProduct[]>(this.http.get<IProduct[]>("https://fakestoreapi.com/products"));
  public product$ = toObservable(this.products);
}
