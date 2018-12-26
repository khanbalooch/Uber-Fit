import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }
  helloService(){
    return 'Settings Service Generated!';
  }
}
