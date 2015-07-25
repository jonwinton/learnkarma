define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var DemoView = require('./DemoView');

    var App = function() {
        this.test = 1;
        this.init();

        return this;
    };

    var proto = App.prototype;

    proto.init = function() {
        this.demoView = new DemoView();
        return this;
    };

    return App;
});
