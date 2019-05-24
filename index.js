function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString("<li name=\"ingredients\">" + this.value + "</li>")
  })
  Handlebars.registerPartial('recipeDetailsPartial', '{{description}}');
  Handlebars.registerPartial('recipeDetailsPartial', '{{ingredients}}');
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let name = '';
  let description = '';
  let ingredients = ['', '', '', '', ''];
  let result = template(name, description, ingredients);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function handleSubmit() {
  event.preventDefault();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let name = document.getElementsByName('name')[0].value;
  let description = document.getElementsByName('description')[0].value;
  let ingredients = document.getElementsByName('ingredients');
  let result = template(name, description, ingredients);
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let name = document.getElementsById('name')[0].value;
  let description = document.getElementsById('description')[0].value;
  let ingredients = document.getElementsByName('ingredients');
  let result = template(name, description, ingredients);
  document.getElementsByTagName("main")[0].innerHTML = result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
