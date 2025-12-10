import {Component, computed, input} from '@angular/core';
import {TipoTransacao, Transacao} from '../../form-nova-transacao-component/Transacao';
import {CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-transacao-component',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './transacao-component.html',
  styleUrl: './transacao-component.css',
})
export class TransacaoComponent {
  transacao = input.required<Transacao>()

  valor = computed(() => {
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}
