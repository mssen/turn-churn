(function(window) {
  'use strict';

  function VictimList() {
    this.list = {};
  }

  Victim.prototype.edit = function(id, name) {
    if (this.list[id]) {
      this.list[id] = name;
    }
  }

  Victim.prototype.remove = function(id) {
    delete this.list[id];
  }

  window.app = window.app || {};
  window.app.VictimList = VictimList;
})(window);