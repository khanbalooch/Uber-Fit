import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {



  constructor(private http: HttpClient) { }

  getLocation() {

    // return this.http.get('http://api.ipapi.com/api/check?access_key=AIzaSyDbTdI4CxHBY3u4S_WlrvgjY4h3V-KrAv0');
    return this.http.get<Location>('https://ipapi.co/json/');

  }
}
