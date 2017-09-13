function run() {
  var addButton = document.querySelector('.add-button'),
      victimInput = document.querySelector('.victim-input'),
      victimList = document.querySelector('.victim-list'),
      submitContainer = document.querySelector('.submit-container');

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