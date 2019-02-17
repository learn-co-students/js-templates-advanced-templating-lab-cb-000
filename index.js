//Displays initial form to make new recipe. On submit, it invokes createRecipe()
function initForm(){
  let newRecipeForm = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(newRecipeForm);
  document.getElementById('main').innerHTML = template({'submitAction': 'createRecipe()'})
}

//renders a new recipe from the values inputted into initial form
function createRecipe(){
  let recipe = getRecipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let html = template(recipe)

  document.getElementById('main').innerHTML = html;
}

//displays a form filled with initial values for edit
function displayEditForm(){
  let name = document.getElementById('recipe-name');
  let description = document.getElementById('recipe-description');
  let ingredientNodes = document.getElementsByName('recipe-ingredients');
  let ingredients = [];

  for (let i = 0; i < ingredientNodes.length; i++){
    ingredients.push(ingredientNodes[i].innerText);
  }

  let recipe = {name, description, ingredients, 'submitAction': 'createRecipe()'}

  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  let html = template(recipe);

  document.getElementById('main').innerHTML = html;
}



//renders an edited recipe
function updateRecipe(){
  let recipe = getRecipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let html = template(recipe)

  document.getElementById('main').innerHTML = html;
}

//retrieves recipe values from the form that is currently rendered
function getRecipeValues(){
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value != '') {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let name = document.getElementsByName("name").value;
  let description = document.getElementsByName("description").value;
  let recipe = {name, description, ingredients};

  return recipe;

}

function handlebarsSetup(){
  //handlebars registrations are here
  Handlebars.registerHelper("displayIngredient", function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById('recipe-form-partial').innerHTML);

}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
