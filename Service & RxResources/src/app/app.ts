import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './component/user/user';
import { Rxresource } from './component/rxresource/rxresource';

@Component({
  selector: 'app-root',
  imports: [User,Rxresource],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Service');
}
