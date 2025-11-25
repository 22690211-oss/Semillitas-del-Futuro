import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoViewInfoForm } from './alumno-view-info-form';

describe('AlumnoViewInfoForm', () => {
  let component: AlumnoViewInfoForm;
  let fixture: ComponentFixture<AlumnoViewInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoViewInfoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoViewInfoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
