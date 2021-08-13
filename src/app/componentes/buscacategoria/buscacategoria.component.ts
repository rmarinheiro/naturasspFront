import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-buscacategoria',
  templateUrl: './buscacategoria.component.html',
  styleUrls: ['./buscacategoria.component.css']
})
export class BuscacategoriaComponent implements OnInit {

  public lista:Produto[] = [];
  public id_categoria : number;

  constructor(private route : ActivatedRoute,private service:ProdutoService) { 
    this.route.params.subscribe(parameters =>{
      this.id_categoria = parameters["id"];
      this.buscarPorCategoria();
    })
  }

  ngOnInit() {
  }

  public buscarPorCategoria(){
      this.service.getProdutosPorCategoria(this.id_categoria)
      .subscribe((res:Produto[])=>{
        this.lista = res;
      },(err)=>{
        alert("erro ao recuperar Produtos por categoria");
      })

  }

}
