define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    describe('DemoView class', function() {

        var DemoView = require('./DemoView');

        it('calls init when created', function() {
            // setup a spy on the App.init method to veryify that it was called
            spyOn(DemoView.prototype, 'init');

            // perform the code to be tested
            var demo = new DemoView();

            // test the expectations
            expect(DemoView.prototype.init).toHaveBeenCalled();
        });


        it('it adds two numbers and returns the correct result', function() {
            // perform the code to be tested
            var demo = new DemoView();

            var num1 = 1;
            var num2 = 2;
            var result = 3;

            expect(demo.add(num1, num2)).toEqual(result);
        });

    });

});
