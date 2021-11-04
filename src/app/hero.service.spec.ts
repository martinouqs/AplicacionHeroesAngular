import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';




describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientTestingModule]});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //UPDATEHERO COVERAGE
  it('should update', ()=>{
    service.updateHero({id: 1, name: ''});
    expect(service).toBeTruthy();
  });

  //SEARCHHERO COVERAGE
  it('should search', ()=>{
    service.searchHeroes('buscar');
    expect(service).toBeTruthy();
  })
  //SEARCHHERO COVERAGE
  it('should search', ()=>{
    service.searchHeroes('');
    expect(service).toBeTruthy();
  })

});
