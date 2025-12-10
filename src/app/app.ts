import { Component, signal } from '@angular/core';
import {BannerComponent} from './componentes/banner-component/banner-component';
import {FormNovaTransacaoComponent} from './componentes/form-nova-transacao-component/form-nova-transacao-component';

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
  protected readonly title = signal('anybank');
}
