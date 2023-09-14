import { Component, ViewChild  } from '@angular/core';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-curso',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  nomeDoCurso = 'Angular';
  valorInicial = 15;

  onMudouValor(evento:any){
    console.log(evento.novoValor);
  }

}
