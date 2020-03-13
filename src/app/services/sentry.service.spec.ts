import { TestBed } from '@angular/core/testing';

import { SentryErrorHandler } from './sentry.service';

describe('SentryService', () => {
  let service: SentryErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentryErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
