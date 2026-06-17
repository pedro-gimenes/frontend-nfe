import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DevolucaoService } from '../../core/services/devolucao.service';

import { DevolucaoRequest } from '../../models/devolucao/devolucao-request';

@Component({
  selector: 'app-devolucao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './devolucao.html',
  styleUrl: './devolucao.css'
})
export class Devolucao {

  request: DevolucaoRequest = {

    id: '',

    operacao: 1,

    naturezaOperacao: '',

    modelo: 55,

    finalidade: 4,

    chaveNfeOrigem: '',

    dataEmissao: '',

    dataEntradaSaida: '',

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

      pagamentos: []

    }

  };

  resposta: any;

  constructor(
    private service: DevolucaoService
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

  devolver() {

    this.service
      .devolver(this.request)
      .subscribe({

        next: (response) => {

          this.resposta = response;

          console.log(response);

          alert('NF-e de devolução emitida com sucesso!');

        },

        error: (error) => {

          console.error(error);

          alert('Erro ao emitir NF-e de devolução');

        }

      });

  }

}
