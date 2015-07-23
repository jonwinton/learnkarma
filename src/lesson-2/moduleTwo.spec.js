/// <reference path="moduleTwo.js">
'use strict';

describe('Test class', function() {

    it('calls init when created', function() {
        // setup a spy on the Test.init method to veryify that it was called
        spyOn(Test.prototype, 'init');

        // perform the code to be tested
        var test = new Test();

        // test the expectations
        expect(Test.prototype.init).toHaveBeenCalled();

        expect(Test.prototype.init.calls.count()).toEqual(1);
    });

});
