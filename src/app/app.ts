import {Component, computed, signal} from '@angular/core';
import {BannerComponent} from './componentes/banner-component/banner-component';
import {FormNovaTransacaoComponent} from './componentes/form-nova-transacao-component/form-nova-transacao-component';
import {TipoTransacao, Transacao} from './componentes/form-nova-transacao-component/Transacao';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNovaTransacaoComponent
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
    this.listaTransacoes.update((listaAtual) => [transacao, ...listaAtual])
  }
}
