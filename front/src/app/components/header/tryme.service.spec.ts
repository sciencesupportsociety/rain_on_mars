import { TestBed, inject } from '@angular/core/testing';

import { TrymeService } from './tryme.service';

describe('TrymeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrymeService]
    });
  });

  it('should be created', inject([TrymeService], (service: TrymeService) => {
    expect(service).toBeTruthy();
  }));
});
