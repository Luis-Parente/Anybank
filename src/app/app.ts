import { Component, signal } from '@angular/core';
import {BannerComponent} from './componentes/banner-component/banner-component';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anybank');
}
