'use strict';
var TESTING = window.TESTING || {};

TESTING.Test = (function(DemoView){

    var Test = function() {
        this.init();
    };

    Test.prototype.init = function () {
        console.log('HELLO!!!!');

        this.demo = new DemoView();
    };

    return Test;
}(TESTING.DemoView))
