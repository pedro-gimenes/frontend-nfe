import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

EmpresaRequest

}

from '../../models/empresa/empresa-request';

import {

EmpresaResponse

}

from '../../models/empresa/empresa-response';

@Injectable({

providedIn:'root'

})

export class EmpresaService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

salvar(

body:EmpresaRequest

):Observable<EmpresaResponse>{

return this.http.post<EmpresaResponse>(

`${this.api}/nfe/empresa`,

body

);

}

listar(){

return this.http.get<EmpresaResponse[]>(

`${this.api}/nfe/empresa`

);

}

}
