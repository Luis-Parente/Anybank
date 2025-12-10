import {Component, input} from '@angular/core';
import {BoasVindasComponent} from './boas-vindas-component/boas-vindas-component';
import {ContaComponent} from './conta-component/conta-component';

@Component({
  selector: 'app-banner-component',
  imports: [BoasVindasComponent, ContaComponent],
  templateUrl: './banner-component.html',
  styleUrl: './banner-component.css',
})
export class BannerComponent {
    saldo = input.required<number>();
}
