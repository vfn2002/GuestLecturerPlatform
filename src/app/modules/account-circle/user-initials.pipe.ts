import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../model/user';

@Pipe({
  name: 'userInitials'
})
export class UserInitialsPipe implements PipeTransform {

  transform(user: User, args?: any): any {
    let initials = '';
    initials += user.firstName.charAt(0).toUpperCase();
    initials += user.lastName.charAt(0).toUpperCase();
    return initials;
  }

}
