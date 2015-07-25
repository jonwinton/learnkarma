define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var DemoView = function() {
        this.init();

        return this;
    };

    var proto = DemoView.prototype;

    proto.init = function() {

        return this;
    };

    proto.add = function(num1, num2) {
        return num1 + num2;
    };

    return DemoView;
});
