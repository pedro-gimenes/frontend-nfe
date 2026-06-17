import { Icms } from './icms';

import { Ipi } from './ipi';

import { Pis } from './pis';

import { Cofins } from './cofins';

export interface ImpostoRequest {

    referencia: string;

    descricao: string;

    icms: Icms[];

    ipi: Ipi[];

    pis: Pis[];

    cofins: Cofins[];

    informacoesFisco: string;

    informacoesComplementares: string;

}
