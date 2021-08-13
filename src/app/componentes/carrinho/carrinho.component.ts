import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/model/pedido';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public pedido:Pedido;
  public vazio:boolean;
  constructor(private route:Router,private carService:CarrinhoService) { 
    
  }

  public continuar(){
    this.route.navigate(["/"]);
  }

  ngOnInit() {
    this.pedido = JSON.parse(localStorage.getItem("NaturaSSPCart"));
    if(!this.pedido){
      this.vazio = true;

    }else{
      this.vazio = false;

    }
  }

  public removerItem(idProduto:number){
    let i:number;
    for(i=0; i < this.pedido.itensPedido.length; i++){
      if(this.pedido.itensPedido[i].produto.id == idProduto){
        alert("Removi o produto" + this.pedido.itensPedido[i].produto.nome);
        this.pedido.valorTotal = this.pedido.valorTotal - this.pedido.itensPedido[i].preco_total;
       // alert(this.pedido.valorTotal);
        this.pedido.itensPedido.splice(i,1);
        this.carService.getNumberOfItens().next(this.pedido.itensPedido.length);
       
      }
    }
    localStorage.setItem("NaturaSSPCart",JSON.stringify(this.pedido));
  }

  public efetivar(){
    if(this.pedido.itensPedido.length > 0){
      this.route.navigate(['/efetivarpedido'])
    }
   // this.route.navigate(['/destaques'])
   
  }

}
