import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

import {

ConsultaResponse

}

from '../../models/consulta/consulta-response';

@Injectable({

providedIn:'root'

})

export class ConsultaService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

consultar(

uuid:string

): Observable<ConsultaResponse>{

return this.http.get<ConsultaResponse>(

`${this.api}/nfe/consulta/${uuid}`

);

}

}
