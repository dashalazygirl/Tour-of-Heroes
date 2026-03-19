import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
@Component({
    selector: 'app-heroes',
    imports: [NgFor,CommonModule, FormsModule, NgIf, RouterLink], 
    templateUrl: './heroes.html',
    styleUrls: ['./heroes.css'],
})
export class Heroes implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}