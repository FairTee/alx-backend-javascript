const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return the correct sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should round and sum correctly with one decimal place', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round and sum correctly with both numbers having decimal places', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should handle rounding correctly when both numbers have decimal places', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
