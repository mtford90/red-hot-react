//noinspection JSUnusedGlobalSymbols
var React = require('react');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        function sum(value1, value2) {
            return value1 + value2;
        }
        expect(sum(1, 2)).toBe(3);
    });
});

describe('jsx', function () {
    it('xyz', function () {
        var elem = (<div></div>);
        console.log('Checkout this element', elem);
    });
});

