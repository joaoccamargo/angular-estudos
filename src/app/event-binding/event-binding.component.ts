import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  valorAtual:string ='';
  valorSalvo:string = '';
  isMouseOver:boolean = false;

  constructor(){

  }

  botaoClicado(){
    alert("Hello World")
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


}
