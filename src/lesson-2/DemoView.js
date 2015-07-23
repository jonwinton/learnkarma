'use strict';

var TESTING = window.TESTING || {};

TESTING.DemoView = (function(){

    var DemoView = function() {
        this.womp();
    };

    DemoView.prototype.womp = function () {
        return 'womp';
    };

    return DemoView;
}())
