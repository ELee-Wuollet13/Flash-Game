import { UserName } from './../src/back.js';


describe('UserName', () => {

  test('should get user name', () => {
    var username = new UserName('Fred');
    expect(username.userName).toEqual('Fred');
  })
  test('verify random number generator', () => {
    var randomgen = new UserName();
    expect(randomgen.randomGenerator()).toBeLessThan(5);
    expect(randomgen.randomGenerator()).toBeGreaterThan(0);
  });
});
