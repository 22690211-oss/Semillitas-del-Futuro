import { TestBed } from '@angular/core/testing';

import { ActividadesGrupo } from './actividades-grupo';

describe('ActividadesGrupo', () => {
  let service: ActividadesGrupo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesGrupo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
