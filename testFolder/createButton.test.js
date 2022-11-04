/**
 * @jest-environment jsdom
 */
describe('Test for button creation', () => {
  it('Correctly creates button element', () => {
    const button = document.createElement('button');
  expect(button).toEqual(document.createElement('button'));
  })
})