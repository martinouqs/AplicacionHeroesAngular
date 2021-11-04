import { HttpClientTestingModule } from '@angular/common/http/testing';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add', () =>{
    component.add('suma');
    expect(component).toBeTruthy();
  })
  it('should add', () =>{
    component.add('');
    expect(component).toBeTruthy();
    
  })
  it('should delete', ()=>{
    component.delete({id: 1, name: ''});
    expect(component).toBeTruthy(); 
  })
});
