import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlumnos } from './manage-alumnos';

describe('ManageAlumnos', () => {
  let component: ManageAlumnos;
  let fixture: ComponentFixture<ManageAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAlumnos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
