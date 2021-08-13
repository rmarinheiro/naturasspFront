import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {
  public idPedido: number;

  constructor(private route:ActivatedRoute) { 
    this.idPedido = 0;
  }

  ngOnInit() {
    this.idPedido = this.route.snapshot.params["id"];

  }

}
