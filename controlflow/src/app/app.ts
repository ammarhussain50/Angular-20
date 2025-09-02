import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conditionalflow } from './component/conditionalflow/conditionalflow';

@Component({
  selector: 'app-root',
  imports: [Conditionalflow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('controlflow');
}
