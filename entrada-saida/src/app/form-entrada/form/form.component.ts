import { Component, OnInit } from '@angular/core';
import { FormJson } from 'src/app/tools/formulario/formulario.models';

@Component({
  selector: 'app-form-entrada',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentEntrada implements OnInit {
  ngOnInit(): void {
    try{
      this.form = {form_title:'Entrada', 
        inputs:[ {name:"modelo", type:"text", label:"Modelo", required:true},
          {name:"qntPares", type:"number", label:"Quantidade de pares entregue", required:true},
          {name:"valorPar", type:"text", label:"Valor do par", required:true} ],
        btn_submit:"Enviar"}
    }
    catch {
      throw new Error('Erro ao carregar');
    }
  }

  form!:FormJson

}
