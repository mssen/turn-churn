(function(window) {
  'use strict';

  function Controller(view) {
    var self = this;

    self.view = view;

    self.view.bind('add', function (name) {
      self.add(name);
    });
  }

  Controller.prototype.add = function (name) {
    var trimmedName = name.trim();

    if (trimmedName) {
      this.view.add(name);
    }
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);