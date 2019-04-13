function init() {
  //put any page initialization/handlebars initialization here
  let template = document.getElementById("recipe-form-template").innerHTML;
  document.getElementsByTagName("main")[0].innerHTML += template;
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
