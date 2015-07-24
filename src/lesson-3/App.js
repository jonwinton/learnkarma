define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var DemoView = require('./DemoView');
    console.log(DemoView);

    var App = function() {
        this.init();
    };

    var proto = App.prototype;

    proto.init = function() {
        console.log('hit');

        this.demoView = new DemoView();
        console.log(this.demoView);
    };

    return App;
});
