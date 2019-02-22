import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArribaComponent } from './arriba.component';

describe('ArribaComponent', () => {
  let component: ArribaComponent;
  let fixture: ComponentFixture<ArribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
