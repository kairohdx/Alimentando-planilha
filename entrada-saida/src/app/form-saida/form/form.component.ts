import { Component, OnInit } from '@angular/core';
import { FormJson } from 'src/app/tools/formulario/formulario.models';

@Component({
  selector: 'app-form-saida',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormSaidaComponent implements OnInit {
  ngOnInit(): void {
    try{
      this.form = {form_title:'Entrada', 
        inputs:[ {name:"descricao", type:"text", label:"Descrição", required:true},
          {name:"preco", type:"number", label:"Preço", required:true} ],
        btn_submit:"Enviar"}
    }
    catch {
      throw new Error('Erro ao carregar');
    }
  }

  form!:FormJson

}
