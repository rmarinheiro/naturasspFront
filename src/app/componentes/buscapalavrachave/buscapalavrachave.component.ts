import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { BuscapalavrachaveService } from 'src/app/servicos/buscapalavrachave.service';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-buscapalavrachave',
  templateUrl: './buscapalavrachave.component.html',
  styleUrls: ['./buscapalavrachave.component.css']
})
export class BuscapalavrachaveComponent implements OnInit {

  private key:string;
  private lista:Produto[] = [];

  constructor(private busca:BuscapalavrachaveService,private service:ProdutoService) { 
     busca.getKey().subscribe(
      (res:string) =>{
        this.key = res;
        this.service.getProdutosPelaPalavraChave(this.key).subscribe(
            (res:Produto[])=>{
                this.lista = res;
            })
        });

  }

 

  ngOnInit() {
    
  }

}
