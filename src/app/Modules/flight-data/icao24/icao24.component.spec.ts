import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icao24Component } from './icao24.component';

describe('Icao24Component', () => {
  let component: Icao24Component;
  let fixture: ComponentFixture<Icao24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Icao24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Icao24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
