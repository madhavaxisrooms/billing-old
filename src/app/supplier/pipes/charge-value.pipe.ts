import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chargeValue'
})
export class ChargeValuePipe implements PipeTransform {

  transform(value: any, userDetail: any, rule: any): any {
    return null;
  }

}
