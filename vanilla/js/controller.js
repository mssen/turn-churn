(function(window) {
  'use strict';

  function Controller(view) {
    var self = this;

    self.view = view;

    self.view.bind('add', function (name) {
      self.add(name);
    });

    self.view.bind('remove', function () {
      self.remove();
    });

    self.view.bind('clear', function () {
      self.clear();
    });
  }

  Controller.prototype.add = function (name) {
    var trimmedName = name.trim();

    if (trimmedName) {
      this.view.add(name);
    }
  }

  Controller.prototype.remove = function () {
    this.view.remove();
  }

  Controller.prototype.clear = function () {
    this.view.clear();
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);