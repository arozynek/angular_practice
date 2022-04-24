import {Pipe, PipeTransform} from '@angular/core';
import {User} from './users/model/user';
import {UsersComponent} from './users/users.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    array: User[],
    property: keyof User,
  ): User[] {
    return array.sort(
      (first: User, second: User) => {
       return first[property]
          .toString()
          .localeCompare(
            second[property].toString(),
          );
      },
    );
  }
}
