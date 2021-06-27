import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const heroes = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return heroes;
  }

  getCrisis(id: number): Observable<Crisis>{
    return of(CRISES.find(crisis => crisis.id == id)!);
  }
}
