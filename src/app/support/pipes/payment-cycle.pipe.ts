import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentCycle'
})
export class PaymentCyclePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var cycle; 
    if (value == 1) return "Monthly";
    else if (value == 3) return "Quarterly";
    else if (value == 6) return "Half Yearly";
    else if (value == 12) return "Yearly";
    
  }

}
