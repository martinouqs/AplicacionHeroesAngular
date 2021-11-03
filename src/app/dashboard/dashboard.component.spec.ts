import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { Hero } from '../hero';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpTestingController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get heroes', () => {
    const httpRequest: TestRequest = httpTestingController.expectOne('api/heroes');
    expect(component.heroes.length).toBe(0);

    const response: Array<Hero> = [{ id: 1, name: 'test 1' }, { id: 2, name: 'test 2' }];
    httpRequest.flush(response);

    expect(component.heroes.length).toBeGreaterThan(0);
    expect(component.heroes.length).toBe(1);
    expect(component.heroes[0].id).toBe(2);
    expect(component.heroes[0].name).toBe('test 2');

    httpTestingController.verify();
  });
});
