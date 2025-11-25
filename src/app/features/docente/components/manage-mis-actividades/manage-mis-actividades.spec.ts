import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMisActividades } from './manage-mis-actividades';

describe('ManageMisActividades', () => {
  let component: ManageMisActividades;
  let fixture: ComponentFixture<ManageMisActividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMisActividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMisActividades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
