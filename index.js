function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ing) {
      return new Handlebars.SafeString("<li name=\"ingredients\">" + ing + "</li>")
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let name = '';
  let description = '';
  let ingredients = ['', '', '', '', ''];
  let result = template({name: name, description: description, ingredients: ingredients});
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function handleSubmit() {
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let ingredients = [...document.getElementsByName('ingredients')].map(el => el.value);
  let result = template({name: name, description: description, ingredients: ingredients});
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let name = document.getElementById('name').innerHTML;
  let description = document.getElementById('description').innerHTML;
  let ingredients = [...document.getElementsByName('ingredients')].map(el => el.innerHTML);
  let result = template({name: name, description: description, ingredients: ingredients});
  document.getElementsByTagName("main")[0].innerHTML = result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
