import { TestBed, inject } from '@angular/core/testing';

import { ProductproviderService } from './productprovider.service';

describe('ProductproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductproviderService]
    });
  });

  it('should be created', inject([ProductproviderService], (service: ProductproviderService) => {
    expect(service).toBeTruthy();
  }));
});
