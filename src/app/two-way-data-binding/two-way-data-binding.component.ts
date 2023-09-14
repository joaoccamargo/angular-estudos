import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent {

  nome = 'ABC';

  pessoa: any = {
    nome: 'Jose',
    idade: 20
  }

}
