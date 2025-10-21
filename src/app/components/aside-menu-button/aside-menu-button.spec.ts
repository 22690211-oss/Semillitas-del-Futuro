import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuButton } from './aside-menu-button';

describe('AsideMenuButton', () => {
  let component: AsideMenuButton;
  let fixture: ComponentFixture<AsideMenuButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideMenuButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideMenuButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
