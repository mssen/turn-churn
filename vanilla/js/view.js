(function(window) {
  'use strict';

  function View() {
    this.ENTER_KEY = 13;

    this.addButton = document.querySelector('.add-button');
    this.victimInput = document.querySelector('.victim-input');
    this.victimList = document.querySelector('.victim-list');
    this.submitContainer = document.querySelector('.submit-container');
  }

  View.prototype.add = function (name) {
    var close = document.createElement('button');
    close.classList.add('victim-delete');
    close.appendChild(document.createTextNode('✕'));

    var newVictim = document.createElement('li');
    newVictim.classList.add('victim');
    newVictim.appendChild(document.createTextNode(name));
    newVictim.appendChild(close);

    this.victimList.appendChild(newVictim);
    this.victimInput.value = '';

    if (this.submitContainer.classList.contains('hidden')) {
      this.submitContainer.classList.remove('hidden');
    }
  }

  View.prototype.remove = function () {
    alert('it works');
  }

  View.prototype.bind = function (event, handler) {
    var self = this;

    if (event === 'add') {
      self.addButton.addEventListener('click', function () {
        handler(self.victimInput.value);
      });

      self.victimInput.addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === self.ENTER_KEY) {
          self.addButton.click();
        }
      });
    } else if (event === 'remove') {
      self.victimList.addEventListener('click', function (event) {
        if (event.target.classList.contains('victim-delete')) {
          handler();
        }
      }, false);
    }
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);