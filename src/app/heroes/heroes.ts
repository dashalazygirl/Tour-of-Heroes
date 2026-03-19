import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';     // 1. Добавили импорт модуля форм
import { UpperCasePipe } from '@angular/common';   // 2. Добавили импорт пайпа

@Component({
  selector: 'app-heroes',
  imports: [FormsModule, UpperCasePipe], 
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
