(function (window) {
  'use strict';

  function View() {
    this.ENTER_KEY = 13;

    this.addButton = document.querySelector('.add-button');
    this.victimInput = document.querySelector('.victim-input');
    this.victimList = document.querySelector('.victim-list');
    this.submitContainer = document.querySelector('.submit-container');
    this.clearButton = document.querySelector('.clear-button');
  }

  View.prototype.add = function (id, name) {
    var close = document.createElement('button');
    close.classList.add('victim-delete');
    close.appendChild(document.createTextNode('✕'));

    var newVictim = document.createElement('li');
    newVictim.classList.add('victim');
    newVictim.setAttribute('data-id', id);
    newVictim.appendChild(document.createTextNode(name));
    newVictim.appendChild(close);

    this.victimList.appendChild(newVictim);
    this.victimInput.value = '';

    if (this.submitContainer.classList.contains('hidden')) {
      this.submitContainer.classList.remove('hidden');
    }
  }

  View.prototype.remove = function (id) {
    var victim = document.querySelector('[data-id="' + id + '"]');
    victim.parentNode.removeChild(victim);

    if (this.victimList.children.length === 0) {
      this.submitContainer.classList.add('hidden');
    }
  }

  View.prototype.clear = function () {
    while (this.victimList.firstChild) {
      this.victimList.removeChild(this.victimList.firstChild);
    }
    this.submitContainer.classList.add('hidden');
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
          handler(event.target.parentNode.dataset.id);
        }
      }, false);
    } else if (event === 'clear') {
      self.clearButton.addEventListener('click', function () {
        handler();
      });
    }
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);