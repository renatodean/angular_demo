import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { User } from 'shared/models/user.model';

// Constant for letting now the api that the objects are Json objects
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  public url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = `${environment.host}`;
  }

  /**
   * Function for logging in, sends a Http post request to the backend
   * with the user
   * @param user: User
   * @returns Observable<Object> a promise with success or fail and the
   * token generated in case of success.
   * The token will be stored in a variable inside the auth.service
   */
  login(user: User): Observable<Object> {
    return this.http.post(`${this.url}/login`, user, httpOptions)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(err => {
        return of({success: false});
      })
    );
  }

  /**
   * Function for getting the id of the logged user
   * @returns Number the id of the user
   */
  getUserId(): Number {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const token = currentUser['token'];
      let payload;
      payload = JSON.parse(atob(token.split('.')[1]));
      return payload['user']['id'];
    } catch (error) {
      return -1;
    }
  }

}
