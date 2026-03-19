import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, CommonModule } from '@angular/common'; // Добавь CommonModule

@Component({
  selector: 'app-heroes',
  imports: [FormsModule, UpperCasePipe, CommonModule], 
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})

export class Heroes {
  heroes = HEROES;
  
  // 1. Создаем переменную для хранения выбранного героя. 
  // Она пустая при загрузке.
  selectedHero?: Hero;

  // 2. Метод, который сработает при клике. 
  // Мы принимаем "героя" как аргумент и записываем его в нашу переменную.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}