import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetApi } from './Componenet/get-api/get-api';
import { ReactiveForm } from './Componenet/reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [GetApi,ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Api');
}
