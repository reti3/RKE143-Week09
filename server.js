const express = require('express');
const recipeRouter = require('./routes/recipes.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const app = express();

app.use('/recipes', recipeRouter);

app.use('/ingredients', ingredientRouter);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});