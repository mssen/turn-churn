(function(window) {
  'use strict';

  function View() {
    this.addButton = document.querySelector('.add-button');
    this.victimInput = document.querySelector('.victim-input');
    this.victimList = document.querySelector('.victim-list');
    this.submitContainer = document.querySelector('.submit-container');
  }



  window.app = window.app || {};
  window.app.View = View;
})(window);