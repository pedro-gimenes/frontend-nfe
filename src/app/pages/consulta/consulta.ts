import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ConsultaService }

from '../../core/services/consulta.service';

import { ConsultaResponse }

from '../../models/consulta/consulta-response';

@Component({

selector:'app-consulta',

standalone:true,

imports:[

CommonModule,

FormsModule

],

templateUrl:'./consulta.html',

styleUrl:'./consulta.css'

})

export class Consulta {

uuid='';

resposta?:ConsultaResponse;

constructor(

private service: ConsultaService

){}

consultar(){

this.service

.consultar(

this.uuid

)

.subscribe({

next:(response)=>{

this.resposta=response;

},

error:(error)=>{

console.error(error);

alert(

'NF-e não encontrada'

);

}

});

}

}
