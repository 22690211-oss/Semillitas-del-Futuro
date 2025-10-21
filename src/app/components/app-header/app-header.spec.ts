import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/actividad/actividad.spec.ts
import { Actividad } from './actividad';

describe('Actividad', () => {
  let component: Actividad;
  let fixture: ComponentFixture<Actividad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actividad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad);
========
import { AppHeader } from './app-header';

describe('AppHeader', () => {
  let component: AppHeader;
  let fixture: ComponentFixture<AppHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeader);
>>>>>>>> feature/admin:src/app/components/app-header/app-header.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
