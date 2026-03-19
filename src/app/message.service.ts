import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // Массив для хранения текстов сообщений

  // Метод для добавления сообщения в список
  add(message: string) {
    this.messages.push(message);
  }

  // Метод для очистки всех сообщений
  clear() {
    this.messages = [];
  }
}
