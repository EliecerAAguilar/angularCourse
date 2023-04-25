import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnagramaServiceService {
  constructor() {}

  isAnagrama(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
      return false;
    }
    if (str1.toLowerCase() === str2.toLowerCase()) {
      return false;
    }

    if (
      str1.toLowerCase().split('').sort().join('') ===
      str2.toLowerCase().split('').sort().join('')
    ) {
      return true;
    }
    return false;
  }
}
