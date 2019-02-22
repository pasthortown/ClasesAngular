import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina4Component } from './pagina4.component';

describe('Pagina4Component', () => {
  let component: Pagina4Component;
  let fixture: ComponentFixture<Pagina4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
