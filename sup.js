/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(val2) {
        if (val === val2) {
            return true;
        } else {
            
        }
    }

    function notToBe(val2) {
        if (val !== val2) {
            return true;
        } else {
            throw new Error('Equal');
        }
    }

    return {
        toBe,
        notToBe
    };
};

// Example usage:
try {
    expect(5).toBe(5); // true
    expect(5).notToBe(5); // throws "Equal"
} catch (error) {
    console.error(error.message);
}
