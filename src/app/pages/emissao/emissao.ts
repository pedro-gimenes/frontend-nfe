import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EmissaoService } from '../../core/services/emissao.service';

import { EmissaoRequest } from '../../models/emissao/emissao-request';

@Component({

  selector: 'app-emissao',

  standalone: true,

  imports: [

    CommonModule,

    FormsModule

  ],

  templateUrl: './emissao.html',

  styleUrl: './emissao.css'

})

export class Emissao {

  request: EmissaoRequest = {

    id: '',

    operacao: 1,

    naturezaOperacao: '',

    finalidade: 1,

    dataEmissao: '',

    dataEntradaSaida: '',

    nfeReferenciada: [],

    cliente: {

      cpf: '',

      nomeCompleto: '',

      cnpj: '',

      razaoSocial: '',

      ie: '',

      suframa: '',

      consumidorFinal: 1,

      contribuinte: 1,

      endereco: '',

      complemento: '',

      numero: '',

      bairro: '',

      cidade: '',

      uf: '',

      cep: '',

      telefone: '',

      email: ''

    },

    produtos: [

      {

        item: 1,

        nome: '',

        codigo: '',

        ncm: '',

        cest: '',

        unidade: 'UN',

        origem: 0,

        quantidade: 1,

        peso: 0,

        subtotal: 0,

        desconto: 0,

        total: 0,

        classeImposto: '',

        beneficioFiscal: '',

        informacoesAdicionais: '',

        gtin: '',

        gtinTributavel: ''

      }

    ],

    pedido: {

      pagamento: 1,

      presenca: 1,

      intermediador: 0,

      cnpjIntermediador: '',

      idIntermediador: '',

      modalidadeFrete: 0,

      frete: 0,

      desconto: 0,

      despesasAcessorias: 0,

      total: 0,

      informacoesFisco: '',

      informacoesComplementares: '',

      pedidoCompra: '',

      contrato: '',

      notaEmpenho: '',

      pagamentos: [

        {

          formaPagamento: '',

          descricaoPagamento: '',

          dataPagamento: '',

          tipoIntegracao: 0,

          valorPagamento: 0,

          cnpjCredenciadora: '',

          bandeira: '',

          autorizacao: '',

          cnpjBeneficiario: '',

          idTerminalPag: ''

        }

      ]

    },

    previaDanfe: false,

    assincrono: false

  };

  resposta: any;

  constructor(

    private service: EmissaoService

  ) {}

  adicionarProduto() {

    this.request.produtos.push({

      item: this.request.produtos.length + 1,

      nome: '',

      codigo: '',

      ncm: '',

      cest: '',

      unidade: 'UN',

      origem: 0,

      quantidade: 1,

      peso: 0,

      subtotal: 0,

      desconto: 0,

      total: 0,

      classeImposto: '',

      beneficioFiscal: '',

      informacoesAdicionais: '',

      gtin: '',

      gtinTributavel: ''

    });

  }

  removerProduto(index: number) {

    this.request.produtos.splice(index, 1);

  }

  emitir() {

    this.service

      .emitir(this.request)

      .subscribe({

        next: (response) => {

          this.resposta = response;

          alert('NF-e emitida com sucesso');

          console.log(response);

        },

        error: (error) => {

          console.error(error);

          alert('Erro ao emitir NF-e');

        }

      });

  }

}
