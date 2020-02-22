import { TestBed } from '@angular/core/testing';

import { DbCrudService } from './db-crud.service';

describe('DbCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbCrudService = TestBed.get(DbCrudService);
    expect(service).toBeTruthy();
  });
});
