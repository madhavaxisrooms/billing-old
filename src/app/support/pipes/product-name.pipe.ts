import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == "BE") return "Booking Engine";
    else if (value == "CM") return "Channel Manager";
    else if (value == "HEX") return "HeX";
  }

}
