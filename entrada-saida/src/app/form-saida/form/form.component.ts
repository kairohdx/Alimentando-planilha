import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/sevice.service';
import { FormularioComponent } from 'src/app/tools/formulario/formulario.component';
import { FormJson } from 'src/app/tools/formulario/formulario.models';
import { InputSets } from 'src/app/tools/input-form/input-form.models';

@Component({
  selector: 'app-form-saida',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormSaidaComponent implements OnInit {
  
  @ViewChild(FormularioComponent) formComponent?: FormularioComponent

  constructor(private formService: BaseService, private alert: ToastrService){}

  ngOnInit(): void {
    try{
      this.form = {form_title:'Saida', userId:"", sheetsId:"",
        inputs:[ {name:"descricao", type:"text", label:"Descrição", required:true, valid:true},
          {name:"preco", type:"number", label:"Preço", required:true, valid:true} ],
        btn_submit:"Enviar"}
    }
    catch {
      throw new Error('Erro ao carregar');
    }
  }

  form!:FormJson

  public onControlChange(_sets:InputSets){
    let idx = this.form.inputs.indexOf(_sets)
    if(idx>-1){
      this.form.inputs[idx] = _sets
    }
  }

  submit(values:(string|boolean)[]): void {
    let body = {
      formId:"",
      pageName: "Entrada",
      firstLine: [],
      values: values
    }

    this.formComponent?.toogleLoading()
    
    this.formService.insertRow(body, this.form.userId, this.form.sheetsId).subscribe(result => {
      if(result.FileAndPageStatus){
        this.alert.success("Concluido", "Dados inseridos na planilha")
      }else{
        this.alert.error("Erro", "Não foi possivel inserir os dados na planilha")
      }
      this.formComponent?.clear()
      this.formComponent?.toogleLoading()
    })
 }

}
