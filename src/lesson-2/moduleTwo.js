'use strict';
(function(){

    var Test = function() {
        this.init();
    };

    Test.prototype.init = function () {
        console.log('HELLO!!!!');
    };

    return Test;
}())
