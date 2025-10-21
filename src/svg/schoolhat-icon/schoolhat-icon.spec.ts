import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolhatIcon } from './schoolhat-icon';

describe('SchoolhatIcon', () => {
  let component: SchoolhatIcon;
  let fixture: ComponentFixture<SchoolhatIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolhatIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolhatIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
