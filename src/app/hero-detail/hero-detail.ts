import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, UpperCasePipe } from '@angular/common'; // Импорты для шаблона
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  // В Angular 19 обязательно добавь эти модули в imports, чтобы шаблон работал
  imports: [FormsModule, NgIf, UpperCasePipe], 
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
  this.location.back();
}

}
