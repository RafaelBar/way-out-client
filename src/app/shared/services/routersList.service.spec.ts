import { TestBed } from '@angular/core/testing';

import { RoutersListService } from './routersList.service';

describe('RoutersService', () => {
  let service: RoutersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
