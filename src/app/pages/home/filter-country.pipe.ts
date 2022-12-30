import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from 'src/app/components/country-card/country-card.component';

@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {

  transform(value: ICountry[], country: string = '', region: string = '', max: number = 8): ICountry[] {
    const copy = value;

    return copy.filter(c => {
      if (!!country && region === '') {
        return (c.name.common as string).toLowerCase().includes(country)
      }
      else if (!!region && country === '') {
        return (c.region.toLowerCase().includes(region))
      }
      else if (!!region && !!country) {
        return (c.name.common as string).toLowerCase().includes(country) && (c.region.toLowerCase().includes(region))
      }

      return c
    }).slice(0, max)
  }

}
