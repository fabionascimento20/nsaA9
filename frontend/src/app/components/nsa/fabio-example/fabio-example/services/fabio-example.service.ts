import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FabioExampleService {

  constructor() { }

  getList(): Observable<any> {
    return of([
      {
        position: 1,
        name: 'Edson Rodrigo Inacio',
        weight: 83.5,
        symbol: 'bla'
      }
    ])
  }
}
