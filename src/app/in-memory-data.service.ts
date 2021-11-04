import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): { heroes: Hero[] } {
    const heroes: Hero[] = [
      { id: 1, name: 'uno' },
      { id: 2, name: 'dos' },
      { id: 3, name: 'tres' },
      { id: 4, name: 'cuatro' },
      { id: 5, name: 'cinco' },
      { id: 5, name: 'seis' }
    ];
    return { heroes: heroes };
  }

  genId(heroes: Hero[]): number {

    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
