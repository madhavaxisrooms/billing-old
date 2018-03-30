import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recurring'
})
export class RecurringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == true)  return "Recurring"; else  return "One Time";
  }

}
