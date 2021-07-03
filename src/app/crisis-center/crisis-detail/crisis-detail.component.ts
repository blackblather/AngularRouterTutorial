import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  @Input() crisis: Crisis | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getCrisis(Number(params.get('id')!));
      })
    ).subscribe(crisis => {
      this.crisis = crisis;
    });
  }

  gotoCrisis(id: number) {
    this.router.navigate(['../', {'id': id, 'foo': 'bar'}], {relativeTo: this.route});
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis!.name = "heyooo";
    this.gotoCrises();
  }

  gotoCrises() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
