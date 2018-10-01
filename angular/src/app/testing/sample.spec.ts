import { factorial } from './sample';

// Test Development Driven 

describe('Factorial Testing', () => {
  it('deberia ser 120 el factorial de 5', () => {
    expect(factorial(5)).toEqual(120)
  })
  it('deberia ser 1 el factorial de 1', () => {
    expect(factorial(1)).toEqual(1)
  })
  it('deberia ser undefined el factorial de 0', () => {
    expect(factorial(0)).toBeUndefined()
  })
  it('deberia ser undefined el factorial de numeros negativos', () => {
    expect(factorial(-3)).toBeUndefined()
  })
});


/*  it('should create', () => {
    expect(1 === 1).toBeTruthy();
  }); */