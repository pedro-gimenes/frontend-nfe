import { Injectable } from '@angular/core';

import {

HttpClient

} from '@angular/common/http';

import {

Observable

} from 'rxjs';

@Injectable({

providedIn:'root'

})

export class RelatorioService {

private api='http://localhost:8080';

constructor(

private http: HttpClient

){}

gerar(

uuid:string,

tipoArquivo:string

): Observable<Blob>{

return this.http.get(

`${this.api}/nfe/relatorio/${uuid}?tipoArquivo=${tipoArquivo}`,

{

responseType:'blob'

}

);

}

}
