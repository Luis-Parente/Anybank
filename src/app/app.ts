import {Component, computed, signal} from '@angular/core';
import {BannerComponent} from './componentes/banner-component/banner-component';
import {FormNovaTransacaoComponent} from './componentes/form-nova-transacao-component/form-nova-transacao-component';
import {TipoTransacao, Transacao} from './componentes/form-nova-transacao-component/Transacao';
import {ExtratoComponent} from './componentes/extrato-component/extrato-component';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNovaTransacaoComponent,
    ExtratoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  listaTransacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.listaTransacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;

        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;

        default:
          throw new Error("Tipo de transação não identificado")
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!');
    }

    this.listaTransacoes.update((listaAtual) => [transacao, ...listaAtual])
  }
}
