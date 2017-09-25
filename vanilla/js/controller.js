(function (window) {
  'use strict';

  function Controller(model, view) {
    var self = this;

    self.model = model;
    self.view = view;

    self.view.bind('add', function (name) {
      self.add(name);
    });

    self.view.bind('remove', function (id) {
      self.remove(id);
    });

    self.view.bind('clear', function () {
      self.clear();
    });
  }

  Controller.prototype.add = function (name) {
    var trimmedName = name.trim();

    if (trimmedName) {
      var id = this.model.create(name);
      this.view.add(id, name);
    }
  }

  Controller.prototype.remove = function (id) {
    this.model.remove(id);
    this.view.remove(id);
  }

  Controller.prototype.clear = function () {
    this.model.removeAll();
    this.view.clear();
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);