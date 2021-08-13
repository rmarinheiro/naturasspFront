import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { EnderecoCep } from 'src/app/model/EnderecoCep';
import { Pedido } from 'src/app/model/pedido';
import { BuscacepService } from 'src/app/servicos/buscacep.service';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { PedidoService } from 'src/app/servicos/pedido.service';

@Component({
  selector: 'app-efetivar-pedido',
  templateUrl: './efetivar-pedido.component.html',
  styleUrls: ['./efetivar-pedido.component.css']
})
export class EfetivarPedidoComponent implements OnInit {

  public cliente:Cliente;
  public achou: boolean;
  public visivel : boolean;
  public pedido: Pedido;
  public mensagem: string;
  public msgEndereco : string;
  public exibirPerguntaEndereco:boolean;
  public exibirFormEndereco:boolean;

  constructor(private service:ClienteService,private pedidoservice:PedidoService,
              private router:Router , private cepService:BuscacepService,private carService:CarrinhoService) { 
    this.cliente = new Cliente();
    this.pedido = new Pedido();
    this.achou = false;
    this.visivel= false;
    this.msgEndereco = "";
    this.exibirFormEndereco = false;
    this.exibirPerguntaEndereco = true;
    
  }

  public exibirForm(){
    this.exibirPerguntaEndereco = false;
    this.exibirFormEndereco = true;
    this.cliente.cep = "";
    this.cliente.logradouro="";
    this.cliente.bairro="";
    this.cliente.complemento="";
    this.cliente.estado="";
    this.cliente.numero="";
  }

  public ocultarForm(){
    this.exibirPerguntaEndereco = false;
    
  }

  ngOnInit() {
    this.cliente = new Cliente();
    this.achou = false;
  }

  public isCPFValid():boolean{

    if(!this.cliente.cpf || this.cliente.cpf.length == 0){
      this.mensagem ="CPF Inválido";
      document.getElementById("btnModal").click();
      return false;
    }
    
    let cpf = this.cliente.cpf.trim().replace(".","").replace(".","").replace("-","");
    this.cliente.cpf = cpf;
    let digitos:number [] = cpf.split("").map(i=> +i);  
    
    if(cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444"||
      cpf == "55555555555" || cpf =="66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
    
        return false;
      } 

      let digitos1 = digitos[0]*10 + digitos[1]*9 + digitos[2]*8 + digitos[3]*7 +
                     digitos[4]*6 + digitos[5]*5+ digitos[6]*4 + digitos[7]*3 +
                     digitos[8]*2;   
    let di1 = digitos1 % 11 ;  
    let di3 = 11 - di1;
    console.log(di3);
    if(di3 >= 10){  
      di3 = 0; // regra se o numero for maior que 10
    }
    if(di3 != digitos[9]){
      return false;
    }

    let digitos2 = digitos[0]*11 + digitos[1]*10 + digitos[2]*9 + digitos[3]*8 +
                    digitos[4]*7 + digitos[5]*6+ digitos[6]*5 + digitos[7]*4 + digitos[8]*3 + digitos[9]*2;
    console.log("Valor digitos2", digitos2);
    let d2: number = 11 - digitos2% 11;
    console.log("Valor da variavael d2:" , d2);
    if(d2 >=10){
      d2 = 0;
    }
    if(d2!= digitos[10]){
      return false;
    }else{
      return true;
    }
    return false;
  }

  public buscarCPF(){
    if (!this.isCPFValid()){
      this.mensagem = "CPF Invalido";
      document.getElementById("btnModal").click();
      return;
    }
    this.service.buscarClientePorCPF(this.cliente.cpf)
      .subscribe((cli:Cliente)=>{
          this.cliente = cli;
          this.achou = true;
         this.msgEndereco = cli.logradouro.substring(0,10)+ "***********";
          this.visivel = true;
      },(err)=>{
        if(err.status == 404){
          // deu certo, mas o usuario é novo no sistema
          this.achou = false;
          this.exibirPerguntaEndereco = false;
          this.exibirFormEndereco = true;
          this.visivel = true;
          this.cliente.bairro = "";
          this.cliente.cep ="";
          this.cliente.cidade= "";
          this.cliente.email = "";
          this.cliente.telefone = "";
          this.cliente.estado= "";
          this.cliente.numero = "";
          this.cliente.estado = "";
          this.cliente.logradouro = "";
          this.cliente.complemento="";
          
        }else{
          alert("Erro desconhecido"+ err)
        }
          console.log(err);
      });
  }

  public finalizarPedido(){
    let pedidoTMP:Pedido = JSON.parse(localStorage.getItem("NaturaSSPCart"));
    this.pedido.itensPedido = pedidoTMP.itensPedido
    this.pedido.valorTotal = pedidoTMP.valorTotal;
    this.pedido.cliente = this.cliente;
    this.cliente.cpf = this.cliente.cpf;
    this.pedido.status = 0;
    var dataPedido = new Date();
    this.pedido.dataPedido = dataPedido;
    //this.pedido.cliente.cpf = "11274293707";
    //this.pedido.dataPedido = new Date.now();
    console.log("Dados do cliente"+ this.pedido.cliente.telefone);
    console.log("Data do Pedido"+ this.pedido.dataPedido);

    this.pedidoservice.inserirNovoPedido(this.pedido).subscribe(
          (res:Pedido)=>{
            alert("Pedido efetivado"+res.idPedido)
            localStorage.removeItem("NaturaSSPCart");
            this.carService.getNumberOfItens().next(0);
            this.router.navigate(["/recibo/",res.idPedido])
          },
          (err)=>{
            alert("Não consegui efetivar seu pedido - desculpe");
          }
      );
     //console.log(this.pedido);
  }

  public buscaCep(){
    this.cepService.buscaCEP(this.cliente.cep).subscribe
    ((res:EnderecoCep) =>{
        this.cliente.logradouro = res.logradouro;
        this.cliente.cidade = res.localidade;
        this.cliente.bairro = res.bairro;
        this.cliente.cep = res.cep
        this.cliente.estado = res.uf;
        this.cliente.bairro = res.bairro;
      },(err)=>{
          this.mensagem = "CEP Invalido";
          document.getElementById("btnModal").click();
      });
    
  }

  public ocultaAlert(){
    this.visivel = true;
  }
}
