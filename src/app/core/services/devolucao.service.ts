import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

DevolucaoRequest

}

from '../../models/devolucao/devolucao-request';

import {

DevolucaoResponse

}

from '../../models/devolucao/devolucao-response';

@Injectable({

providedIn:'root'

})

export class DevolucaoService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

devolver(

body: DevolucaoRequest

):Observable<DevolucaoResponse>{

return this.http.post<DevolucaoResponse>(

`${this.api}/nfe/devolucao`,

body

);

}

}
