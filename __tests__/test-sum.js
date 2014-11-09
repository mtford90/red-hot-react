var React = require('react');
jest.dontMock('../scripts/sum');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var sum = require('../scripts/sum');
        expect(sum(1, 2)).toBe(3);
    });
});

describe('jsx', function () {
    it('xyz', function () {
        var elem = (<div></div>);
        console.log('Checkout this element', elem);
    });
});

