import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  public getAllProdutos(){
    console.log("Estou no serviço Produto Service");
    return this.http.get("http://localhost:8080/produto");
  }

  public getProdutosPeloId(id:number){
    return this.http.get("http://localhost:8080/produto/"+id);
  }

  public getProdutosPorCategoria(idCateg:number){
      return this.http.get("http://localhost:8080/produto/categoria/"+idCateg);
  }

  public getProdutosPelaPalavraChave(key : string){
    return this.http.get("http://localhost:8080/produto/busca?key="+key);
  }

}
