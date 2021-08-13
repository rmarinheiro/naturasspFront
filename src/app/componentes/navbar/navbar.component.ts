import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Pedido } from 'src/app/model/pedido';
import { BuscapalavrachaveService } from 'src/app/servicos/buscapalavrachave.service';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lista : Categoria[];
  public numItens:number;
  public pedido : Pedido;
  public key : string;

  constructor(private service : CategoriaService , 
              private carService:CarrinhoService,private router:Router,
              private buscaProduto:BuscapalavrachaveService) {

   }

  ngOnInit(){

    this.numItens = 0;
    this.pedido = JSON.parse(localStorage.getItem("NaturaSSPCart"));
    if(this.pedido){
      this.numItens=this.pedido.itensPedido.length;
    }

    this.service.getAllCategorias()
        .subscribe((res:Categoria[])=> this.lista=res,
                   err=> console.log(err));

  this.carService.getNumberOfItens().subscribe(
    (res) => {this.numItens = res}
  );

  }

  public buscarPorPalavraChave(){
    console.log(this.key);
    if(this.key){
      console.log("navbar = " + this.key);
      this.buscaProduto.getKey().next(this.key);
      this.router.navigate(['/busca']);
    }
    
  }

  

}
