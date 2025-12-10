import {Component} from '@angular/core';
import {CurrencyPipe} from '@angular/common';


@Component({
  selector: 'app-conta-component',
  imports: [CurrencyPipe],
  templateUrl: './conta-component.html',
  styleUrl: './conta-component.css',
})
export class ContaComponent {

}
