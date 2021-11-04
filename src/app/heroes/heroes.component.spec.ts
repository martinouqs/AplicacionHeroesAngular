import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add', () => {
    component.add('suma');
    expect(component).toBeTruthy();
  })
  it('should add', () => {
    component.add('');
    expect(component).toBeTruthy();

  })
  it('should delete', () => {
    component.delete({ id: 1, name: '' });
    expect(component).toBeTruthy();
  })

  it('should get heroes', () => {
    const httpRequest: TestRequest = httpTestingController.expectOne('api/heroes');
    expect(component.heroes.length).toBe(0);
    httpRequest.flush([1]);
    expect(component.heroes.length).toBeGreaterThan(0);
    httpTestingController.verify();
  })


});
