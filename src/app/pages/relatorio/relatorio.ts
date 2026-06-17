import { Component } from '@angular/core';

import {

FormsModule

} from '@angular/forms';

import {

CommonModule

} from '@angular/common';

import {

RelatorioService

}

from '../../core/services/relatorio.service';

@Component({

selector:'app-relatorio',

standalone:true,

imports:[

CommonModule,

FormsModule

],

templateUrl:'./relatorio.html',

styleUrl:'./relatorio.css'

})

export class Relatorio {

uuid='';

tipoArquivo='CSV';

constructor(

private service: RelatorioService

){}

gerar(){

this.service

.gerar(

this.uuid,

this.tipoArquivo

)

.subscribe({

next:(arquivo)=>{

const blob = new Blob(

[arquivo]

);

const url =

window.URL.createObjectURL(

blob

);

const link =

document.createElement(

'a'

);

link.href=url;

link.download=

`relatorio.${

this.tipoArquivo

.toLowerCase()

}`;

link.click();

window.URL

.revokeObjectURL(

url

);

},

error:(error)=>{

console.error(error);

alert(

'Erro ao gerar relatório'

);

}

});

}

}
