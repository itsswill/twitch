import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Handles getting authToken...
   * @returns {Observable<Object>}
   */
  getToken() {
    const clientId = 'qcy1hiofkv03loxirvicsrdf6shg4s';
    const clientSecret = 'wd2gdsmsce09tvjljzcd6h8zklz0c5';
    const authUrl = `user/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
    return this.http.post(authUrl, null);
  }

  getUser(userName: string) {
    const userUrl = `api/helix/users?login=${userName}`;
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get(userUrl, httpOptions);
  }
}
