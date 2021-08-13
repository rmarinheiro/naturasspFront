import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemPedido } from 'src/app/model/ItemPedido';
import { Pedido } from 'src/app/model/pedido';
import { Produto } from 'src/app/model/Produto';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { ProdutoService } from 'src/app/servicos/produto.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public produtoDetalhe:Produto;
  public quantidade : number;

  constructor(private route:ActivatedRoute,private service:ProdutoService,
              private nav: Router,private carService:CarrinhoService) { 
    this.quantidade = 1;
  }

  ngOnInit() {
    this.route.params
    .subscribe(parameter=>{
        this.recuperaProduto(parameter["id"]);
    });
  }

  public recuperaProduto(id:number){
    this.service.getProdutosPeloId(id)
        .subscribe((prod: Produto) =>{ this.produtoDetalhe = prod },
          error => { alert("Erro ao detalhar o produto")}
           
        )};

        public adicionarCarrinho(){
         let pedido:Pedido;
         pedido = JSON.parse(localStorage.getItem("NaturaSSPCart"));
         if(!pedido){ //se ele não existir, eu crio um novo pedido
           pedido = new Pedido();
           pedido.valorTotal=0;
           pedido.itensPedido = [];
         }
         let item : ItemPedido;
         item = new ItemPedido();
         item.qtd_item = this.quantidade;
         item.produto = this.produtoDetalhe;
         item.preco = this.produtoDetalhe.preco;
         item.preco_total = item.preco * item.qtd_item;


         pedido.itensPedido.push(item);
         pedido.valorTotal = pedido.valorTotal + item.preco_total;
         localStorage.setItem("NaturaSSPCart", JSON.stringify(pedido));
         this.carService.getNumberOfItens().next(pedido.itensPedido.length);
         this.nav.navigate(['carrinho']);



        }
    
  }


