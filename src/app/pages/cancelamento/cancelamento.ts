import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {

CancelamentoService

}

from '../../core/services/cancelamento.service';

import {

CancelamentoResponse

}

from '../../models/cancelamento/cancelamento-response';

@Component({

selector:'app-cancelamento',

standalone:true,

imports:[

CommonModule,

FormsModule

],

templateUrl:'./cancelamento.html',

styleUrl:'./cancelamento.css'

})

export class Cancelamento {

uuid='';

justificativa='';

resposta?:CancelamentoResponse;

constructor(

private service: CancelamentoService

){}

cancelar(){

this.service

.cancelar(

this.uuid,

{

justificativa:

this.justificativa

}

)

.subscribe({

next:(response)=>{

this.resposta=response;

alert(

'NF-e cancelada com sucesso'

);

},

error:(error)=>{

console.error(error);

alert(

'Erro ao cancelar NF-e'

);

}

});

}

}
