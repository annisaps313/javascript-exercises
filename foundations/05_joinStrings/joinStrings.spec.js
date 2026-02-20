const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Annisa', () => {
    expect(values.firstName).toEqual('Annisa');
  });
  test('lastName is Puspitasari', () => {
    expect(values.lastName).toEqual('Puspitasari');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test.skip('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test.skip('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
