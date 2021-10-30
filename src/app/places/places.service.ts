import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place
    (
      'p1',
      'Manhattan mansion',
      'In the heart of New York City.',
      'https://lp-cms-production.imgix.net/2021-10/Dusseldorf%20%28c%29%20Your%20Little%20Black%20Book_Ashkan%20Mortezapour.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1',
      149.99
    ),
    new Place
    (
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://lp-cms-production.imgix.net/2019-06/GettyImages-562412011_medium.jpg?auto=compress&crop=entropy&fit=crop&format=auto&h=416&w=960',
      149.99
    ),
    new Place
    (
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://lp-cms-production.imgix.net/2021-10/GettyImages-1145406277.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1',
      149.99
    ) 

  ]
  
  get places() {
    return [...this._places]
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
