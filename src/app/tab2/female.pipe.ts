import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'female'
})
export class FemalePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: any = [];
    if (value) {
      //return value.filter( (listing:any) => listing.age == 'M' );
      for (let i = 0; i < value.length; i++) {
        if (value[i].gender == 'F') {
          result.push(value[i]);
        }

      }
      return result;
    }
    // return null;
  }

}
