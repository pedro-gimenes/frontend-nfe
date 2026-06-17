import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

EmissaoRequest

} from '../../models/emissao/emissao-request';

import {

EmissaoResponse

} from '../../models/emissao/emissao-response';

@Injectable({

providedIn: 'root'

})

export class EmissaoService {

private api = 'http://localhost:8080';

constructor(

private http: HttpClient

){}

emitir(

body: EmissaoRequest

): Observable<EmissaoResponse>{

return this.http.post<EmissaoResponse>(

`${this.api}/nfe/emissao`,

body

);

}

}
