import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; // Чтобы работали циклы и условия
import { MessageService } from '../message.service'; // Путь к переименованному сервису

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages {
  constructor(public messageService: MessageService) {}
}
