const {runner} = require('./../lib');

describe('runner unit tests', () => {
  test('should do call', () => {
    const name = 'the_name';

    expect(runner(name)).toEqual(`hello ${name}`);
  });
});
