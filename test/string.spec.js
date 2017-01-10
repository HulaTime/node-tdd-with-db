// Example test using native Math class and max method to demonstrate use of chai and mocha

const expect = require('chai').expect;

describe('Math', () => {
  describe('#max', () => {
    it('returns the biggest number from arguments', () => {
      const max = Math.max(1,2,10,4);
      expect(max).to.equal(10);
    });
  });
}); 