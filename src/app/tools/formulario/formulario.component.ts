import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputSets } from '../input-form/input-form.models';
import { FormJson } from './formulario.models';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{

  @ViewChildren("inputs") inputs!: InputFormComponent[]
  
  @Output("submit") submit: EventEmitter<(string|boolean)[]> = new EventEmitter()
  myForm!: FormGroup;
  loading:boolean = false

  Submit() {
    let values:(string|boolean)[] = []
    this.inputs.forEach(input=>{
      input.onSubmit()
      if(input.inputContent.value)
        values.push(input.inputContent.value)
    })
    values.push(new Date().toLocaleDateString("pt-br", {timeZone: "America/Sao_Paulo"}))
    if(Array.from(this.inputs).every(input => input.control.valid))
      this.submit.emit(values)
  }

  ngOnInit(): void {
  }

  clear(){
    console.log("Foi")
    this.inputs.forEach(input=>{
      input.control.reset()
    })
  }

  toogleLoading(){
    this.loading = !this.loading
  }

  @Input() form_json!:FormJson

}
