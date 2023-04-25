import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FibonacciService {
  constructor() {}

  fibonacci(n: number): number {
    if (n < 2) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
  /* genera los 10 primeros valores de la serie de fibonacci */
  fibonacciArray(): number[] {
    let num: number = 10;
    const result = [];
    for (let i = 0; i < num; i++) {
      result.push(this.fibonacci(i));
    }
    return result;
  }

  isFibonacci(num: number): boolean {
    let fibo: number[] = this.fibonacciArray();
    if (fibo.includes(num)) {
      return true;
    }
    return false;
  }

  isPar(n: number): boolean {
    if (n % 2 === 0) {
      return true;
    }
    return false;
  }
}
