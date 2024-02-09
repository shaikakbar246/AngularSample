import { TestBed } from '@angular/core/testing';

import { CountriesDisplayService } from './countries-display.service';

describe('CountriesDisplayService', () => {
  let service: CountriesDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
