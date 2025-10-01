import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

const RecipeContainer = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getRecipes() {
      const response = await axios.get("https://dummyjson.com/recipes");
      const data = response.data.recipes;
      // console.log(data);
      setRecipes(data);
    }

    getRecipes();
  }, []);
  // console.log(recipes);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">레시피 목록</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Recipe 컴포넌트 반복 */}
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeContainer;
