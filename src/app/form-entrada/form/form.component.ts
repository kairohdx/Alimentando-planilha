import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthToken } from 'src/app/models/auth-token';
import { BaseService } from 'src/app/sevice.service';
import { FormularioComponent } from 'src/app/tools/formulario/formulario.component';
import { FormJson } from 'src/app/tools/formulario/formulario.models';
import { InputSets } from 'src/app/tools/input-form/input-form.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-entrada',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentEntrada implements OnInit {
  @ViewChild(FormularioComponent) formComponent?: FormularioComponent

  formGroup!:FormGroup

  constructor(private formService: BaseService, private alert: ToastrService){}

  ngOnInit(): void {
    try{
      this.form = {form_title:'Entrada', userId:"64692a7d8c8bea402e38af10", sheetsId:"1ziSV91-pdqneLboAI3GQla-Zfw8HXalVaVf__0YQEUc",
        inputs:[ {name:"modelo", type:"text", label:"Modelo", required:true, valid:true},
          {name:"qntPares", type:"number", label:"Quantidade de pares entregue", required:true, valid:true},
          {name:"valorPar", type:"number", label:"Valor do par", required:true, valid:true} ],
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
