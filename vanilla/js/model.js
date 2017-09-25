(function (window) {
  'use strict';

  function Model() {
    this.victims = {};
    this.nextId = 1;
  }

  Model.prototype.create = function (name) {
    this.victims[this.nextId] = name;
    return this.nextId++;
  }

  Model.prototype.remove = function (id) {
    delete this.victims[id];
    console.log("Deleted!", this.victims)
  }

  Model.prototype.removeAll = function () {
    for (var victim in this.victims) {
      delete this.victims[victim];
    }
  }

  window.app = window.app || {};
  window.app.Model = Model;
})(window);