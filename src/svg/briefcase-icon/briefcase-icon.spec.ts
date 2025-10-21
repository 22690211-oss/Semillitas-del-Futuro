import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseIcon } from './briefcase-icon';

describe('BriefcaseIcon', () => {
  let component: BriefcaseIcon;
  let fixture: ComponentFixture<BriefcaseIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefcaseIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefcaseIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
