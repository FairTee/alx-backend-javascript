const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return the correct sum of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return the correct sum of rounded numbers with decimals', function() {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the correct subtraction of rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return the correct subtraction of rounded numbers with decimals', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.3), 2);  // Corrected expected value
        });
    });

    describe('DIVIDE', function() {
        it('should return the correct division of rounded numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by zero', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return the correct division when both numbers are integers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        });
    });

    describe('Invalid type', function() {
        it('should throw an error for invalid type', function() {
            assert.throws(() => calculateNumber('MULTIPLY', 1, 1), {
                name: 'Error',
                message: 'Invalid type'
            });
        });
    });
});
