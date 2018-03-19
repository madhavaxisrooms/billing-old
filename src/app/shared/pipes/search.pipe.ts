import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any, query: string): any {
    let filteredList = [];

    if(query == "SHOWING ALL HOTELS"){
      return values;
    }

    if (query != '') {
      query = query.toUpperCase();
      for (let i = 0, len = values.length; i < len; i++)
        if (values[i].productName.toUpperCase().indexOf(query) != -1) filteredList.push(values[i]);
    }

    return filteredList;
  }

}
