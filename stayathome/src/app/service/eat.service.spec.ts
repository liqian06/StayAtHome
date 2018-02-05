import { TestBed, inject } from '@angular/core/testing';

import { EatService } from './eat.service';

describe('EatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EatService]
    });
  });

  it('should be created', inject([EatService], (service: EatService) => {
    expect(service).toBeTruthy();
  }));
});
