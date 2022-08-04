import "./MealCard.css";

interface MealProps {
    name: string;
    imgPath: string;
}

function MealCard(meal: MealProps): JSX.Element {
    return (
        <div className="MealCard">
            <h1>{meal.name}</h1>
            <img src={meal.imgPath}/>
        </div>
    );
}

export default MealCard;
