import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";

//aqui e o nosso objeto pedidos, mas funciona como carrinho de compras
export class Pedido{
    public idPedido:number;
    public status:number;
    public cliente:Cliente;
    public observacoes:string;
    public itensPedido:ItemPedido[];
    public dataPedido : Date;
    public valorTotal:number;
}