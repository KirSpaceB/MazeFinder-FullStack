/**
 * @jest-environment jsdom
 */

describe('Correctly returns a eventListener when instantiated', () => {
  it('Correctly creates eventListener', () => {
    let x = function(num1,num2) {
      return num1 + num2;
    }

    let y = 4;
    
  expect(x(2,2)).toEqual(y);
  })
})