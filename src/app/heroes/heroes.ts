import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'; // <-- Импорт здесь!
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-heroes',
  // В новой версии ишем инструменты ПРЯМО ТУТ:
  imports: [FormsModule,UpperCasePipe], 
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  hero: Hero = { id: 1, name: 'Windstorm' };
}
