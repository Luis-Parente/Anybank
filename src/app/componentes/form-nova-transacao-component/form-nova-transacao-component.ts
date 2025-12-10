import {Component, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TipoTransacao, Transacao} from './Transacao';
import {KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao-component',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao-component.html',
  styleUrl: './form-nova-transacao-component.css',
})
export class FormNovaTransacaoComponent {

  valorTransacao = "";
  tipoTransacao = "";

  transacaoCriada = output<Transacao>();

  listaTiposTransacao = TipoTransacao;

  aoSubmeter() {
    const novaTransacao = new Transacao(this.tipoTransacao as TipoTransacao, Number(this.valorTransacao));
    this.transacaoCriada.emit(novaTransacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
