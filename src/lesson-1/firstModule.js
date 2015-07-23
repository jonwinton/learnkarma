'use strict';

// My first module to test!
var firstModule = (function(){
    var merge = function(string1, string2) {
        return string1 + string2;
    };


  return {
      merge: merge
  };
}());
