import {

Component,

OnInit

}

from '@angular/core';

import {

CommonModule

} from '@angular/common';

import {

FormsModule

} from '@angular/forms';

import {

ImpostoService

}

from '../../core/services/imposto.service';

@Component({

selector:'app-imposto',

standalone:true,

imports:[

CommonModule,

FormsModule

],

templateUrl:'./imposto.html',

styleUrl:'./imposto.css'

})

export class Imposto implements OnInit {

request={

referencia:'',

descricao:'',

icms:[{

tipoTributacao:'',

cenario:'',

tipoPessoa:'',

codigoCfop:'',

situacaoTriburaria:''

}],

ipi:[{

cenario:'',

tipoPessoa:'',

situacaoTributaria:'',

codigoEnquadramento:'',

aliquota:0

}],

pis:[{

cenario:'',

tipoPessoa:'',

situacaoTributaria:'',

aliquota:0

}],

cofins:[{

cenario:'',

tipoPessoa:'',

situacaoTributaria:'',

aliquota:0

}],

informacoesFisco:'',

informacoesComplementares:''

};

lista:any[]=[];

constructor(

private service:ImpostoService

){}

ngOnInit(){

this.listar();

}

salvar(){

this.service

.salvar(this.request)

.subscribe({

next:()=>{

alert(

'Classe de imposto salva'

);

this.listar();

},

error:(error)=>{

console.error(error);

}

});

}

listar(){

this.service

.listar()

.subscribe({

next:(response)=>{

this.lista=response;

}

});

}

excluir(

referencia:string

){

this.service

.excluir(referencia)

.subscribe({

next:()=>{

alert(

'Excluído'

);

this.listar();

}

});

}

}
