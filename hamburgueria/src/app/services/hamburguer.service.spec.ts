import { TestBed } from '@angular/core/testing';

import { HamburguerService } from './hamburguer.service';

describe('HamburguerService', () => {
  let service: HamburguerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamburguerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
