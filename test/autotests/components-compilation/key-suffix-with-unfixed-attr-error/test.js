const expect = require('chai').expect;

exports.checkError = function(err) {
    expect(err.toString()).to.contain('The "for:key" attribute cannot be used in conjuction with the "for" attribute.');
};
