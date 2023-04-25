import { TestBed } from '@angular/core/testing';

import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzService);
  });

  it('3 should be fizz', () => {
    expect(service.getvalue(2)).toEqual('fizz');
  });

  it('5 should be Buzz', () => {
    expect(service.getvalue(4)).toEqual('Buzz');
  });

  it('15 should be fizzbuzz', () => {
    expect(service.getvalue(14)).toEqual('fizzBuzz');
  });

  it('1 should be 1', () => {
    expect(service.getvalue(0)).toEqual('1');
  });
});
