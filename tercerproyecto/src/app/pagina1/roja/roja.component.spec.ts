import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojaComponent } from './roja.component';

describe('RojaComponent', () => {
  let component: RojaComponent;
  let fixture: ComponentFixture<RojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
