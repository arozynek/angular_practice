import {Injectable} from '@angular/core';
import {Todo} from './model/todo';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
storageKey = 'savedTodos';

  public saveTodos(todos: Todo[]): void {
    const savedTodos: string = JSON.stringify(todos);
    localStorage.setItem(this.storageKey, savedTodos);
  }

  public loadTodos(): Todo[] {
    const savedTodos = localStorage.getItem(
      this.storageKey,
      );
    //jako argument do local storage podajemy to co wyżej,uważać na literówki. dlatego najlepiej dodać to jako zmienną
    //wyżej - storage Key i zapisujemy w miejscu stringa this.storageKey
    if (savedTodos === null) {
      return [];
    }
    const todosObjects: Todo[] = JSON.parse(savedTodos);
    return todosObjects;
  }
}
