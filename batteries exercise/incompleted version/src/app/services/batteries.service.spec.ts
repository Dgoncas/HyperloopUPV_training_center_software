import { TestBed } from '@angular/core/testing';

import { BatteriesService } from './batteries.service';

describe('BatteriesService', () => {
  let service: BatteriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatteriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
