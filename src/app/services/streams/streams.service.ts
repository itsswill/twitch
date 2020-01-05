import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  constructor(private http: HttpClient) { }

  getToken() {
    const clientId = 'qcy1hiofkv03loxirvicsrdf6shg4s';
    const clientSecret = 'wd2gdsmsce09tvjljzcd6h8zklz0c5';
    const authUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return this.http.post(authUrl, null );
  }

  getStreams() {
      const streamUrl = 'api/helix/streams';
      const token = localStorage.getItem('token');
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
      return this.http.get(streamUrl, httpOptions);
  }
}
