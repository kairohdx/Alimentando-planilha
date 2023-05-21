import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Output("onSubmitChange") private onSubmitChange = new EventEmitter<InputSets>

  ngOnInit(): void {
    this.inputContent.type === 'email' && this.control.addValidators(Validators.email)
    this.inputContent.required && this.control.addValidators(Validators.required)
    this.inputContent.value && this.control.setValue(this.inputContent.value)
  }

  onFocus(){
    this.label_trigger = false
  }

  onBlur(){
    this.label_trigger = this.control.value.trim().length === 0
    if(this.control.valid){
      this.inputContent.value = this.control.value.trim()
    }
  }

  onSubmit(){
    if(this.control.valid){
      this.inputContent.value = this.control.value.trim()
    }else{
      this.control.markAllAsTouched()
    }
  }

}
