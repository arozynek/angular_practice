import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {HelloComponent} from './hello/hello.component';
import {TodosComponent} from './todos/todos.component';
import {TodoComponent} from './todos/todo/todo.component';
import {TimerComponent} from './timer/timer.component';
import {UsersComponent} from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { ReversePipe } from './reverse.pipe';
import { HighlightDirective } from './highlight.directive';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    TodosComponent,
    TodoComponent,
    TimerComponent,
    UsersComponent,
    ReversePipe,
    HighlightDirective,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
