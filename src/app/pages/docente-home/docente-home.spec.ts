import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteHome } from './docente-home';

describe('DocenteHome', () => {
  let component: DocenteHome;
  let fixture: ComponentFixture<DocenteHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
