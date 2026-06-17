import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

CancelamentoRequest

}

from '../../models/cancelamento/cancelamento-request';

import {

CancelamentoResponse

}

from '../../models/cancelamento/cancelamento-response';

@Injectable({

providedIn:'root'

})

export class CancelamentoService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

cancelar(

uuid:string,

body:CancelamentoRequest

):Observable<CancelamentoResponse>{

return this.http.put<CancelamentoResponse>(

`${this.api}/nfe/cancelar/${uuid}`,

body

);

}

}
