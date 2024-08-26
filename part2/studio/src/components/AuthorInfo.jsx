import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = <div key={recipedata[0].name}>{recipedata[0].author}</div>;

  const recipeAuthorImage = <img src={recipedata[0].authorImage} alt={recipedata[0].author} className="authorImage" />;

  const recipeWebsite = (
    <a href={recipedata[0].website} target="_blank" rel="noopener noreferrer">
      {recipedata[0].website}
    </a>
  );

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;