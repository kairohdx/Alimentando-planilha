import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentEntrada } from './form-entrada/form/form.component';
import { FormSaidaComponent } from './form-saida/form/form.component';
import { FormularioComponent } from './tools/formulario/formulario.component';
import { InputFormComponent } from './tools/input-form/input-form.component';
import { CarregandoComponent } from './tools/carregando/carregando.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentEntrada,
    FormSaidaComponent,
    FormularioComponent,
    InputFormComponent,
    CarregandoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
