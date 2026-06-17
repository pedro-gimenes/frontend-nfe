import { Cliente } from '../emissao/cliente';

import { Produto } from '../emissao/produto';

import { Pedido } from '../emissao/pedido';

export interface DevolucaoRequest {

    id: string;

    operacao: number;

    naturezaOperacao: string;

    modelo: number;

    finalidade: number;

    chaveNfeOrigem: string;

    dataEmissao: string;

    dataEntradaSaida: string;

    cliente: Cliente;

    produtos: Produto[];

    pedido: Pedido;

}
