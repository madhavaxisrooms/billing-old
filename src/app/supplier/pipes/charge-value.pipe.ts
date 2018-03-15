import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chargeValue'
})
export class ChargeValuePipe implements PipeTransform {

  transform(value: any, userDetail: any, rule: any): any {
    console.log(userDetail);
    console.log(rule);
    return null;
  }

}
