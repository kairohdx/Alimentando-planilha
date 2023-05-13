import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { InputSets } from './input-form.models';

@Component({
  selector: 'my-input',
  animations: [
    trigger('inside', [
      state('true', style({ bottom: '-25px'})),
      state('false', style({ bottom:'0px'})),
      transition('false <=> true', animate(300))
    ])
  ],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {
  public label_trigger:Boolean = true
  public control:FormControl = new FormControl('', {updateOn:'blur'});

  @Input() public inputContent!: InputSets;
  

  ngOnInit(): void {
    this.inputContent.type === 'email' && this.control.addValidators(Validators.email)
    this.inputContent.required && this.control.addValidators(Validators.required)
    this.inputContent.value && this.control.setValue(this.inputContent.value)
  }

  onFocus(){
    this.label_trigger = false
  }

  onBlur(){
    console.log(this.control.value.trim().length === 0)
    this.label_trigger = this.control.value.trim().length === 0
  }

}
