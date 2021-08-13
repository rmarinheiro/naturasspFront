import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscapalavrachaveService {

  private key: BehaviorSubject<String>;

  constructor() { 
    this.key = new BehaviorSubject("");
  }

  public getKey(){
    return this.key;
  }


}
