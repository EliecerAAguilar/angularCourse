import { TestBed } from '@angular/core/testing';

import { AnagramaServiceService } from './anagrama-service.service';

describe('AnagramaServiceService', () => {
  let service: AnagramaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramaServiceService);
  });

  it('anagrama service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('amor and roma should return true', () => {
    expect(service.isAnagrama('amor', 'roma')).toBeTrue();
    console.log('caso 1: amor, roma');
  });

  it('camino and roma should return false', () => {
    expect(service.isAnagrama('camino', 'roma')).toBeFalse();
    console.log('caso 2 longitud mayor: camino, roma');
  });

  it('amor y AMOR should return true', () => {
    expect(service.isAnagrama('amor', 'AMOR')).toBeFalse();
    console.log('caso 3 same word: amor, AMOR');
  });

  it('roma y AMOR should return true', () => {
    expect(service.isAnagrama('roma', 'AMOR')).toBeTrue();
    console.log('caso 4 no case sentitive: amor, AMOR');
  });
});
