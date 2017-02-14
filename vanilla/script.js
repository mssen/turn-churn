function run() {
  var addButton = document.querySelector('#add-button'),
      victimInput = document.querySelector('#victim-input'),
      victimList = document.querySelector('#victim-list');

  addButton.addEventListener('click', function () {
    if (victimInput.value) {
      var newVictim = document.createElement('li');
      newVictim.appendChild(document.createTextNode(victimInput.value));
      victimList.appendChild(newVictim);
      victimInput.value = '';
    }
  });
}

if (document.readyState != 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run());
}