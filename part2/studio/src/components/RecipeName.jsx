import recipedata from "./recipe.json";

function RecipeName() {
  return (
    <>
      {recipedata.map((recipe, index) => (
        <h1 key={index}>{recipe.name}</h1>
      ))}
    </>
  );
}

export default RecipeName;