import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import MealsSquare from "../../MealArea/MealsSquare/MealsSquare";
import Recipe from "../../MealArea/Recipe/Recipe";
import "./Router.css";

function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                {/* Home */}
                <Route path="/home" element={<Home />} />

                <Route path="/category/:category" element={ <MealsSquare/>} />
                <Route path="/meal/:mealId" element={ <Recipe/>} />
            </Routes>
        </div>
    );
}

export default Router;
