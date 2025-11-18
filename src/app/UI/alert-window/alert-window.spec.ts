import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWindow } from './alert-window';

describe('AlertWindow', () => {
  let component: AlertWindow;
  let fixture: ComponentFixture<AlertWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
