import recipedata from "./recipe.json";

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipedata[0].ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;