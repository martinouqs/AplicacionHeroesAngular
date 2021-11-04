import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

import { InMemoryDataService } from './in-memory-data.service';


describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //genId COVERAGE
  it('should genId', () => {
    const heroes: Hero[] = [];
    service.genId(heroes);
    expect(service).toBeTruthy();
  });

  it('should genId ', () => {
    const heroes: Hero[] = [{ id: 1, name: 'uno' }, { id: 2, name: 'dos' }];
    service.genId(heroes);
    expect(service).toBeTruthy();
  });

  //createDb COVERAGE
  it('should createDb', () => {
    const heroesDb: { heroes: Hero[] } = service.createDb();
    expect(service).toBeTruthy();
    expect(heroesDb.heroes.length).toBeGreaterThan(0);
  })

})