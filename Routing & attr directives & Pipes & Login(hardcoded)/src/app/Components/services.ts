import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {
  onlogin : Subject<boolean> = new Subject<boolean>();
}
