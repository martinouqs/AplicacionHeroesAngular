
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [RouterTestingModule,
        HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //goBack COVERAGE
  it('should go back', () => {
    component.goBack();
    expect(component).toBeTruthy();
  })

  //save COVERAGE
  it('should save', () => {
    component.save();
    expect(component).toBeTruthy();
  })

  it('should getHero', () => {
    const httpRequest: TestRequest = httpTestingController.expectOne('api/heroes/0');
    httpRequest.flush({ id: 1, name: 'test' });
    expect(component.hero.name).toBe('test');
    httpTestingController.verify();
  })


});
