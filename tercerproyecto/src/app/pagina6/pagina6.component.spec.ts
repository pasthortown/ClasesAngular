import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina6Component } from './pagina6.component';

describe('Pagina6Component', () => {
  let component: Pagina6Component;
  let fixture: ComponentFixture<Pagina6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
