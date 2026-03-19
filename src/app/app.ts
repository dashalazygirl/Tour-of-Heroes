import { Component } from '@angular/core';
import { Heroes } from './heroes/heroes';
import { Messages } from './messages/messages'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Heroes, Messages], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Tour of Heroes';
}
