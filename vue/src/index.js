import Vue from 'vue';

import App from './App';

new Vue({
  el: '#root',
  render: handler => handler(App)
});