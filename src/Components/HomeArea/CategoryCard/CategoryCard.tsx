import "./CategoryCard.css";

interface CategoryProps {
    name: string;
    imgPath: string;
}

function CategoryCard(category: CategoryProps): JSX.Element {
    return (
        <div className="CategoryCard">
            <h1>{category.name}</h1>
            <img src={category.imgPath}/>
        </div>
    );
}

export default CategoryCard;
