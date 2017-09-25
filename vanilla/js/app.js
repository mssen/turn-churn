(function (){
  'use strict';

  function run() {
    var model = new app.Model();
    var view = new app.View();
    var controller = new app.Controller(model, view);
  }
  
  if (document.readyState != 'loading') {
    run();
  } else {
    document.addEventListener('DOMContentLoaded', run());
  }
})();