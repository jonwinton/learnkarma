'use strict';

var TESTING = window.TESTING || {};

TESTING.DemoView = (function(){

    var DemoView = function() {
        this.womp();
    };

    DemoView.prototype.womp = function () {
        console.log('Got womped');
    };

    return DemoView;
}())
