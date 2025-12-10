import {Component, input} from '@angular/core';
import {TransacaoComponent} from './transacao-component/transacao-component';
import {Transacao} from '../form-nova-transacao-component/Transacao';

@Component({
  selector: 'app-extrato-component',
  imports: [
    TransacaoComponent
  ],
  templateUrl: './extrato-component.html',
  styleUrl: './extrato-component.css',
})
export class ExtratoComponent {

  listaTransacoes = input.required<Transacao[]>()

}
