'use strict';

(function() {

  const KEY_ESC = 27,
        KEY_ENTER = 13;  

  window.util = {
    isEscEvent: function(e, action) {
      if(e.keyCode === KEY_ESC) {
        action();
      };
    },
    isEnterEvent: function(e, action) {
      if(e.keyCode === KEY_ENTER) {
        action();
      };
    },
    randomProperty(arr) {
      return arr[this.randomInteger(arr.length - 1)];
    },
    randomInteger(max) {
      var rand = Math.floor(0 + Math.random() * (max + 1 - 0));
      return rand;
    }
  };
})();