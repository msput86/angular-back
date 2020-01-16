import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {interval} from 'rxjs/observable/interval';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PutovService {
  getSomeNumber(): Observable<number> {
    return interval(500)
    .pipe(
      map(() => {
        return Math.random();
    })
    );
  }


  constructor() { }
}
