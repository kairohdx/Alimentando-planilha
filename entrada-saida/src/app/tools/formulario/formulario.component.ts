import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputSets } from '../input-form/input-form.models';
import { FormJson } from './formulario.models';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit{

  ngOnInit(): void {
  }


  @Input() form_json!:FormJson

}
