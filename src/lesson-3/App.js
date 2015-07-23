define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    var App = function() {
        console.log('dsadf');
        this.init();
    };

    var proto = App.prototype;

    proto.init = function() {
        console.log('hit');
    };

    return App;
});
