import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { EfetivarPedidoComponent } from './componentes/efetivar-pedido/efetivar-pedido.component';
import { ReciboComponent } from './componentes/recibo/recibo.component';
import { BuscacategoriaComponent } from './componentes/buscacategoria/buscacategoria.component';
import { BuscapalavrachaveComponent } from './componentes/buscapalavrachave/buscapalavrachave.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RodapeComponent,
    DestaquesComponent,
    CarrouselComponent,
    DetalhesComponent,
    CarrinhoComponent,
    EfetivarPedidoComponent,
    ReciboComponent,
    BuscacategoriaComponent,
    BuscapalavrachaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
