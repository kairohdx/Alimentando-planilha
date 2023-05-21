import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  entrada:boolean = true

  setAsEntrada(){
    this.entrada = true
  }

  setAsSaida(){
    this.entrada = false
  }
}
