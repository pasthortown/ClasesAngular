import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina5Component } from './pagina5.component';

describe('Pagina5Component', () => {
  let component: Pagina5Component;
  let fixture: ComponentFixture<Pagina5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
