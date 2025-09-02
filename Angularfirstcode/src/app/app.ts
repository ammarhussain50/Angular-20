import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './Component/admin/admin';
import { User } from './Component/user/user';
import { DataBinding } from './Component/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angularfirstcode');
}
