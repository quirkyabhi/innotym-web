import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userData = new BehaviorSubject('');
  currentData = this.userData.asObservable();
  constructor() { }
  updateMessage(data){
    this.userData.next(data)
  
  }
}
