import { Cliente } from './cliente';

import { Produto } from './produto';

import { Pedido } from './pedido';

export interface EmissaoRequest {

    id: string;

    operacao: number;

    naturezaOperacao: string;

    finalidade: number;

    dataEmissao: string;

    dataEntradaSaida: string;

    nfeReferenciada: string[];

    cliente: Cliente;

    produtos: Produto[];

    pedido: Pedido;

    previaDanfe: boolean;

    assincrono: boolean;

}
