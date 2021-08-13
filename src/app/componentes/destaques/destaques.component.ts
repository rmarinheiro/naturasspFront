import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {
  public lista : Produto[];

  //preciso injetar o serviço que busca o produto
  constructor(private service: ProdutoService) {
    console.log("Estou no Construtor do componente");
   }

  ngOnInit() {
    this.service.getAllProdutos()
    .subscribe((res:Produto[]) => this.lista = res,
              err => console.log(err));
  }

}
