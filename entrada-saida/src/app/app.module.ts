import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentEntrada } from './form-entrada/form/form.component';
import { FormSaidaComponent } from './form-saida/form/form.component';
import { FormularioComponent } from './tools/formulario/formulario.component';
import { InputFormComponent } from './tools/input-form/input-form.component';
import { CarregandoComponent } from './tools/carregando/carregando.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentEntrada,
    FormSaidaComponent,
    FormularioComponent,
    InputFormComponent,
    CarregandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
