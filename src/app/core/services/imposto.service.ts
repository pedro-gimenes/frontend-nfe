import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

ImpostoRequest

}

from '../../models/imposto/imposto-request';

import {

ImpostoResponse

}

from '../../models/imposto/imposto-response';

@Injectable({

providedIn:'root'

})

export class ImpostoService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

salvar(

body:ImpostoRequest

):Observable<ImpostoResponse>{

return this.http.post<ImpostoResponse>(

`${this.api}/nfe/classe-imposto`,

body

);

}

listar(){

return this.http.get<ImpostoResponse[]>(

`${this.api}/nfe/classe-imposto`

);

}

excluir(

referencia:string

){

return this.http.delete(

`${this.api}/nfe/classe-imposto/${referencia}`

);

}

}
