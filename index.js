function init() {
  // grab the recipe form template
  const recipeForm = document.getElementById("recipe-form-template").innerHTML;
  // create recipe form function
  const recipeFormFn = Handlebars.compile(recipeForm);
  // add compiled HTML with five blank ingredients to #main
  document.getElementById("main").innerHTML += recipeFormFn({ingredients: ["","","","",""]});

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');  });

}

function handleSubmit() {

  const recipe = {};
  recipe.name = document.getElementById("name").value;
  recipe.description = document.getElementById("description").value;
  const ingredientLis = document.getElementsByName("ingredients");
  recipe.ingredients = [];
  for(const ingredient of ingredientLis) {
    recipe.ingredients.push(ingredient.value);
  };

  // grab recipe template html
  const recipeTemplate = document.getElementById("recipe-template").innerHTML;
  // create recipe template function
  const recipeTemplateFn = Handlebars.compile(recipeTemplate);
  // store compiled html with values into variable
  const recipeHTML = recipeTemplateFn(recipe);
  // add compiled hmtl to #main
  document.getElementById("main").innerHTML = recipeHTML;

}

function displayEditForm() {

  const recipe = {};
  recipe.name = document.getElementById("recipeName").innerHTML;
  recipe.description = document.getElementById("recipeDescription").innerHTML;
  const ingredientLis = document.getElementsByName("ingredients");
  recipe.ingredients = [];
  for(const ingredient of ingredientLis) {
    recipe.ingredients.push(ingredient.innerHTML);
  };

  const recipeForm = document.getElementById("recipe-form-template").innerHTML;
  const recipeFormFn = Handlebars.compile(recipeForm);
  const recipeFormHTML = recipeFormFn(recipe);
  document.getElementById("main").innerHTML = recipeFormHTML;

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})