/// <reference path="firstModule.js">
'use strict';

describe('My firstModule test suite', function() {
    // Merge test
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

    // Add Test
    it("Adds two numbers and returns the correct result", function() {
        // Arrange
        var num1 = 10;
        var num2 = 5;
        var expected = 15;

        // Act
        var result = firstModule.add(num1, num2);

        // Assert
        expect(result).toBe(expected);
    });
});
