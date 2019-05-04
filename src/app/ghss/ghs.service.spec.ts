import { TestBed } from '@angular/core/testing';

import { GhsService } from './ghs.service';

describe('GhsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhsService = TestBed.get(GhsService);
    expect(service).toBeTruthy();
  });
});
