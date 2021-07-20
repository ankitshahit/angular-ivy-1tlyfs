import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDigits'
})
export class ShowDigitsPipe implements PipeTransform {
  transform(value: number, args?: number): any {
    return !value ? value : value.toFixed(args);
  }
}
