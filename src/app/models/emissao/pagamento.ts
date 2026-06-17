export interface Pagamento {

    formaPagamento: string;

    descricaoPagamento: string;

    dataPagamento: string;

    tipoIntegracao: number;

    valorPagamento: number;

    cnpjCredenciadora: string;

    bandeira: string;

    autorizacao: string;

    cnpjBeneficiario: string;

    idTerminalPag: string;

}
