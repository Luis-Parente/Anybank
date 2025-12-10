import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TipoTransacao, Transacao} from './Transacao';

@Component({
  selector: 'app-form-nova-transacao-component',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao-component.html',
  styleUrl: './form-nova-transacao-component.css',
})
export class FormNovaTransacaoComponent {

  valorTransacao = "";
  tipoTransacao = "";

  transacaoCriada = output<Transacao>();

  aoSubmeter() {
    const novaTransacao = new Transacao(this.tipoTransacao as TipoTransacao, Number(this.valorTransacao));
    this.transacaoCriada.emit(novaTransacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
