import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollars'
})
export class DollarsPipe implements PipeTransform {

transform(value: number | undefined): string {
  if (value == null) return '0.00'; 
  return value.toFixed(2);
}


}
