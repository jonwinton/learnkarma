/// <reference path="firstModule.js">
'use strict';

describe('My firstModule test suite', function() {
    it("To concat two strings", function() {
        // Arrange
        var string1 = 'string1';
        var string2 = 'string2'
        var expected = 'string1string2';

        // Act
        var result = firstModule.merge(string1, string2);

        // Assert
        expect(result).toBe(expected);
    });
});
