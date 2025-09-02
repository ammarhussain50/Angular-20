import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from './Component/signal/signal';

@Component({
  selector: 'app-root',
  imports: [Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signal');
}
