import operate from '../logic/operate';

describe('operate', () => {
  test('should add two numbers', () => {
    const tests = operate(20, 2, '+');
    expect(tests).toEqual('22');
  });

  test('should multiply two numbers', () => {
    const tests2 = operate(10, 100, 'x');
    expect(tests2).toEqual('1000');
  });

  test('should substract two numbers', () => {
    const tests3 = operate(100, 99, '-');
    expect(tests3).toEqual('1');
  });

  test('should divide two numbers', () => {
    const tests4 = operate(27, 3, '÷');
    expect(tests4).toEqual('9');
  });

  test('perform modulus operation', () => {
    const tests5 = operate(9, 2, '%');
    expect(tests5).toEqual('1');
  });
});
