import { Component } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { Messages } from './messages/messages'; 
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Heroes, Messages], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Tour of Heroes';
}
