import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocenteProfileModal } from './docente-profile-modal';
describe('DocenteProfileModal', () => {
  let component: DocenteProfileModal;
  let fixture: ComponentFixture<DocenteProfileModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteProfileModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteProfileModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
