(function (){
  'use strict';

  function run() {
    var view = new app.View();
    var controller = new app.Controller(view);
  }
  
  if (document.readyState != 'loading') {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run());
  }
})();