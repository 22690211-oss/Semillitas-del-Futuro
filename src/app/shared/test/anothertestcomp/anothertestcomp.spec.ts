import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anothertestcomp } from './anothertestcomp';

describe('Anothertestcomp', () => {
  let component: Anothertestcomp;
  let fixture: ComponentFixture<Anothertestcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anothertestcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anothertestcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
