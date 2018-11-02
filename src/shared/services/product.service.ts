import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { Product } from 'shared/models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Constant for letting now the api that the objects are Json objects
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {
  public url: string;

  private idPatientDetail: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private idPatientDetail$: Observable<number> = this.idPatientDetail.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.url = `${environment.host}`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(`${this.url}/products`, httpOptions)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return of([] as any);
      })
    );
  }

  getProductById(idProduct: number): Observable<Product> {
    return this.http.get(`${this.url}/product/${idProduct}`, httpOptions)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return of({} as any);
      })
    );
  }

  setIdProductDetail(idProduct: number) {
    this.idPatientDetail.next(idProduct);
  }

  getIdProductDetail() {
    return this.idPatientDetail$;
  }

}
