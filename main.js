// import Vue from 'vue'
// import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})	

// https://pomber.github.io/covid19/timeseries.json

axios.get("https://pomber.github.io/covid19/timeseries.json")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

console.log("data");