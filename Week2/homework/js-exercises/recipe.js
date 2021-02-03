'use strict'
 
 var recipe = {
     'Meal name' : 'Omelette',
     'Serves' : 2,
    'Ingredients' : ['4 eggs', ' 2 strips of Bacon', ' 1 tsp salt/pepper']
 }; //object properties added

 for (const [key, value] of Object.entries(recipe)) {
    console.log(`${key}: ${value}`);
  } //accessing the properties of the variable recipe with 'Object.entries'