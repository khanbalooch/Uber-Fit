import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'male'
})
export class MalePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: any = [];
    if (value) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].gender == 'M') {
          result.push(value[i]);
        }

      }
      return result;
    }
    //return null;
  }
}
