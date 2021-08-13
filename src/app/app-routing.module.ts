import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { EfetivarPedidoComponent } from './componentes/efetivar-pedido/efetivar-pedido.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';
import { BuscacategoriaComponent } from './componentes/buscacategoria/buscacategoria.component';
import { BuscapalavrachaveComponent } from './componentes/buscapalavrachave/buscapalavrachave.component';


const routes : Routes = [
  {path: '' , component: DestaquesComponent},
  {path: 'detalhe/:id' , component: DetalhesComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'efetivarpedido', component: EfetivarPedidoComponent},
  {path:'recibo/:id', component: ReciboComponent},
  {path:'categoria/:id', component:BuscacategoriaComponent},
  {path:'busca', component:BuscapalavrachaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
