import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  const authorLink = "https://www.justonecookbook.com/teriyaki-sauce/";
  const authorPhoto =
    "https://www.justonecookbook.com/wp-content/uploads/2024/07/namiko-chen-just-one-cookbook.jpg";
  const authorName = "Namiko Chen";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="A photo of Namiko Chen posing in a kitchen."
        className={styles.imageUpdates}
        height={300}
        width={300}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Just One Cookbook</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Teriyaki Sauce</h1>
          <p>
            Learn how to make delicious and easy homemade Teriyaki Sauce the
            authentic Japanese way
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;