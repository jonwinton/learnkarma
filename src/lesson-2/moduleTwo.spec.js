/// <reference path="moduleTwo.js">
/// <reference path="DemoView.js">
'use strict';

describe('Test class', function() {
    // Get window instance of TESTING global
    var TESTING = window.TESTING || {};
    // Alias modules
    var Test = TESTING.Test;
    var DemoView = TESTING.DemoView;

    it('calls init when created', function() {
        // setup a spy on the Test.init method to veryify that it was called
        spyOn(Test.prototype, 'init');

        // perform the code to be tested
        var test = new Test();

        // test the expectations
        expect(Test.prototype.init).toHaveBeenCalled();

        expect(Test.prototype.init.calls.count()).toEqual(1);
    });

    it('creates a demo view', function() {
        // perform the code to be tested
        var test = new Test();

        expect(test.demo instanceof DemoView).toEqual(true);
    });

});
