/// <reference path="moduleTwo.js">
/// <reference path="DemoView.js">
'use strict';

describe('Test class', function() {

    it('calls init when created', function() {
        var TESTING = window.TESTING || {};
        var Test = TESTING.Test;
        // setup a spy on the Test.init method to veryify that it was called
        spyOn(Test.prototype, 'init');



        // perform the code to be tested
        var test = new Test();

        // test the expectations
        expect(Test.prototype.init).toHaveBeenCalled();

        expect(Test.prototype.init.calls.count()).toEqual(1);
    });

    it('creates a demo view', function() {
        var TESTING = window.TESTING || {};
        var Test = TESTING.Test;
        var DemoView = TESTING.DemoView;

        // perform the code to be tested
        var test = new Test();

        console.log(test);

        expect(test.demo instanceof DemoView).toEqual(true);
    });

});
