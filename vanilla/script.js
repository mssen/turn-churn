function run() {
  var addButton = document.getElementById('add-button'),
      victimInput = document.getElementById('victim-input'),
      victimList = document.getElementById('victim-list'),
      submitContainer = document.getElementById('submit-container');

  addButton.addEventListener('click', function () {
    if (victimInput.value) {
      var newVictim = document.createElement('li');
      newVictim.appendChild(document.createTextNode(victimInput.value));
      victimList.appendChild(newVictim);
      victimInput.value = '';

      if (submitContainer.classList.contains('hidden')) submitContainer.classList.remove('hidden');
    }
  });
}

if (document.readyState != 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run());
}