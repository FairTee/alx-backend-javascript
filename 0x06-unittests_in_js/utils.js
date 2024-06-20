const Utils = {
  calculateNumber(type, a, b) {
    // Paste your existing calculateNumber function code here
    // Ensure this function behaves as expected based on your previous implementation
    // Return the rounded sum, subtraction, or division result based on 'type'
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
  }
};

module.exports = Utils;
