const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('tiene que ser una función', () => {
      expect(typeof mdLinks).toBe('function');
  });
});



// Test para configurar JEST
describe('initial', () => {
  test('test inicial', () => {
    expect(true).toBe(true)
  })
})

// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });