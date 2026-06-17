import {

Routes

}

from '@angular/router';

import {

Login

}

from './pages/login/login';

import {

Dashboard

}

from './pages/dashboard/dashboard';

import {

authGuard

}

from './core/guards/auth.guard';

export const routes: Routes = [

{

path:'',

redirectTo:'login',

pathMatch:'full'

},

{

path:'login',

component: Login

},

{

path:'dashboard',

component: Dashboard,

canActivate:[

authGuard

]

},

{

path:'emissao',

loadComponent:()=>import(

'./pages/emissao/emissao'

)

.then(

m=>m.Emissao

),

canActivate:[

authGuard

]

},

{

path:'consulta',

loadComponent:()=>import(

'./pages/consulta/consulta'

)

.then(

m=>m.Consulta

),

canActivate:[

authGuard

]

},

{

path:'cancelamento',

loadComponent:()=>import(

'./pages/cancelamento/cancelamento'

)

.then(

m=>m.Cancelamento

),

canActivate:[

authGuard

]

},

{

path:'devolucao',

loadComponent:()=>import(

'./pages/devolucao/devolucao'

)

.then(

m=>m.Devolucao

),

canActivate:[

authGuard

]

},

{

path:'empresa',

loadComponent:()=>import(

'./pages/empresa/empresa'

)

.then(

m=>m.Empresa

),

canActivate:[

authGuard

]

},

{

path:'imposto',

loadComponent:()=>import(

'./pages/imposto/imposto'

)

.then(

m=>m.Imposto

),

canActivate:[

authGuard

]

},

{

path:'relatorio',

loadComponent:()=>import(

'./pages/relatorio/relatorio'

)

.then(

m=>m.Relatorio

),

canActivate:[

authGuard

]

}

];
