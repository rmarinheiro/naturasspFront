import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscacepService {

  constructor(private http:HttpClient) { 

  }
  

  public buscaCEP(cep:string){
    return this.http.get("http://viacep.com.br/ws/"+cep+"/json/")
  }
}
