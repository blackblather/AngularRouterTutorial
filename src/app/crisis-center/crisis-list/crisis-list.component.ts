import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from '../../message.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis?: Crisis;

  crises: Crisis[] = [];
  selectedId = 0;

  constructor(private crisisService: CrisisService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises();
      })
    ).subscribe(crises => this.crises = crises);
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    this.messageService.add(`CrisesComponent: Selected crisis id=${crisis.id}`);
  }
}
