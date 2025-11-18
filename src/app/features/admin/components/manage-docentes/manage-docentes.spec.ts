import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDocentes } from './manage-docentes';

describe('ManageDocentes', () => {
  let component: ManageDocentes;
  let fixture: ComponentFixture<ManageDocentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDocentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDocentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
