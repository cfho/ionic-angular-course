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
      'https://www.lonelyplanet.com/articles/top-things-to-do-in-portugal',
      149.99
    ),
    new Place
    (
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://www.lonelyplanet.com/articles/best-day-trips-from-charleston',
      149.99
    ),
    new Place
    (
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://www.lonelyplanet.com/articles/germany-north-rhine-westphalia-today',
      149.99
    ) 

  ]
  
  get places() {
    return [...this.places]
  }

  constructor() { }
}
