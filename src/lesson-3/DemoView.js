define(function(require, exports, module) { // jshint ignore:line
'use strict';
    var DemoView = function() {
        console.log('Demoview instantiated');

        this.init();
    };

    DemoView.prototype.womp = function () {
        console.log('wommp');
    };

    return DemoView;
});
