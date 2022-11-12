import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
