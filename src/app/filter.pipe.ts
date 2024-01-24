import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    return value.filter(function(search :any) {
      return search.title.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    })
  }

}
