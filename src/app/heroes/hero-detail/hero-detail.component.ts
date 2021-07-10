import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getHero(Number(params.get('id')!));
      })
    ).subscribe(hero => {
      this.hero = hero;
    });
  }
  gotoHeroes(id: number) {
    this.router.navigate(['/superheroes', {'id': id, 'foo': 'bar'}]);
  }
}
