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

EmpresaService

}

from '../../core/services/empresa.service';

@Component({

selector:'app-empresa',

standalone:true,

imports:[

CommonModule,

FormsModule

],

templateUrl:'./empresa.html',

styleUrl:'./empresa.css'

})

export class Empresa implements OnInit {

request={

cnpj:'',

razaoSocial:'',

nomeFantasia:'',

inscricaoEstadual:'',

regimeTributario:1,

email:'',

telefone:'',

cep:'',

endereco:'',

numero:'',

bairro:'',

municipio:'',

uf:''

};

lista:any[]=[];

constructor(

private service:EmpresaService

){}

ngOnInit(){

this.listar();

}

salvar(){

this.service

.salvar(

this.request

)

.subscribe({

next:()=>{

alert(

'Empresa salva com sucesso'

);

this.listar();

},

error:(error)=>{

console.error(error);

alert(

'Erro ao salvar empresa'

);

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

}
