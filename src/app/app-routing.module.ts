import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {HelloComponent} from './hello/hello.component';
import {TimerComponent} from './timer/timer.component';
import {TodosComponent} from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: '**',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
