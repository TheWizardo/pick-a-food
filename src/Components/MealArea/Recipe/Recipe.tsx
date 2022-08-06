import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeModel from "../../../Models/recipeModel";
import foodService from "../../../Services/FoodService";
import IngredientsTable from "../IngredientsTable/IngredientsTable";
import Instructions from "../Instructions/Instructions";
import "./Recipe.css";

function Recipe(): JSX.Element {

    const params = useParams();
    const [meal, setMeal] = useState<RecipeModel>();

    useEffect(() => {
        (async () => {
            const mealId = +params.mealId;
            const recipe = await foodService.getMeal(mealId);
            setMeal(recipe);
        })();
    }, []);

    return (
        <div className="Recipe">
            {meal && <>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} />
                <IngredientsTable {...meal} />
                <Instructions instructions={meal.strInstructions}/>
            </>}
        </div>
    );
}

export default Recipe;
