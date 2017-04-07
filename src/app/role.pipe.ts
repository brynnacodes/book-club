import { Pipe, PipeTransform } from '@angular/core';
import { MemberService } from './member.service';

@Pipe({
  name: 'role',
  pure: false
})

export class RolePipe implements PipeTransform {

  transform(input: any[], desiredRole) {
    var output: any[] = [];
    if (desiredRole === 'presidentRole') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].role === 'President') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === 'vicePresidentRole') {
        for (let i = 0; i < input.length; i++) {
          if (input[i].role === 'Vice President') {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === 'creativeDirectorRole') {
        for (let i = 0; i < input.length; i++) {
          if (input[i].role === 'Creative Director') {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === 'attendeeRole') {
        for (let i = 0; i < input.length; i++) {
          if (input[i].role === 'Attendee') {
            output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
