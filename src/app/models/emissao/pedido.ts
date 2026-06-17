import { Pagamento } from './pagamento';

export interface Pedido {

  pagamento: number;

  presenca: number;

  intermediador: number;

  cnpjIntermediador: string;

  idIntermediador: string;

  modalidadeFrete: number;

  frete: number;

  desconto: number;

  despesasAcessorias: number;

  total: number;

  informacoesFisco: string;

  informacoesComplementares: string;

  pedidoCompra: string;

  contrato: string;

  notaEmpenho: string;

  pagamentos: Pagamento[];

}
