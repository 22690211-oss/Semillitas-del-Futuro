import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupIcon } from './user-group-icon';

describe('UserGroupIcon', () => {
  let component: UserGroupIcon;
  let fixture: ComponentFixture<UserGroupIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGroupIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
