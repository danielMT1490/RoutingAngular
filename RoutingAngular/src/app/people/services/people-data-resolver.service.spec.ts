import { TestBed } from '@angular/core/testing';

import { PeopleDataResolverService } from './people-data-resolver.service';

describe('PpeopleDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleDataResolverService = TestBed.get(PeopleDataResolverService);
    expect(service).toBeTruthy();
  });
});
