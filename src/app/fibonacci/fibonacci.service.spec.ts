import { TestBed } from '@angular/core/testing';

import { FibonacciService } from './fibonacci.service';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('5 should verify a number is a fibonacci and is odd', () => {
    expect(service.isFibonacci(5)).toBeTrue();
    expect(service.isPar(5)).toBeFalse();
  });

  it('8 should verify a number is a fibonacci and is even', () => {
    expect(service.isFibonacci(8)).toBeTrue();
    expect(service.isPar(8)).toBeTrue();
  });

  it('4 should verify a number is not a fibonacci and is even', () => {
    expect(service.isFibonacci(4)).toBeFalse();
    expect(service.isPar(4)).toBeTrue();
  });

  it('7 should verify a number is not a fibonacci and is odd', () => {
    expect(service.isFibonacci(7)).toBeFalse();
    expect(service.isPar(7)).toBeFalse();
  });
});
