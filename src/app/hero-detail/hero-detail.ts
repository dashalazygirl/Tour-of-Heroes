import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';     // Добавь это
import { NgIf, UpperCasePipe } from '@angular/common'; // Добавь это

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe], 
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css' 
})
export class HeroDetail{
  @Input() hero?: Hero;
}
