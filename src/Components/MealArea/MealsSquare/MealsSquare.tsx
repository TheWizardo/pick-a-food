import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealModel from "../../../Models/mealModel";
import foodService from "../../../Services/FoodService";
import randomService from "../../../Services/RandomService";
import MealCard from "../MealCard/MealCard";
import "./MealsSquare.css";

function MealsSquare(): JSX.Element {

    const params = useParams();
    const [randMeals, setRandMeals] = useState<MealModel[]>([]);

    useEffect(() => {
        (async () => {
            const category = params.category;
            const meals = await foodService.getFromCategory(category);
            const rand_arr = randomService.randomElementsFromArray<MealModel>(meals, 4);
            setRandMeals(rand_arr);
        })();
    }, []);

    return (
        <div className="MealsSquare">
            {randMeals && randMeals.map(e => <MealCard name={e.strMeal} imgPath={e.strMealThumb} key={e.idMeal}/>)}
        </div>
    );
}

export default MealsSquare;
