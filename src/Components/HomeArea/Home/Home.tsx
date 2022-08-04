import { useEffect, useState } from "react";
import CategoryModel from "../../../Models/categoryModel";
import foodService from "../../../Services/FoodService";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.css";


function Home(): JSX.Element {

    const [categories, setCategories] = useState<CategoryModel[]>();
    const [usedCategories, setUsedCategories] = useState<boolean[]>([]);
    const [index, setIndex] = useState<number>(-1);

    useEffect(() => {
        (async () => {
            setCategories(await foodService.getAllCategories());
        })();
    }, []);

    useEffect(() => {
        if (categories) {
            setUsedCategories(Array.from(Array(categories.length).keys()).map(e => false));
            setIndex(Math.floor(Math.random() * categories.length));
        }
    }, categories);

    useEffect(() => {
        if (categories) {
            const tempUsed = usedCategories;
            if (tempUsed.every(e => e === true)) {
                setUsedCategories(Array.from(Array(categories.length).keys()).map(e => false));
                setIndex(Math.floor(Math.random() * categories.length));
            }
            if (!tempUsed[index]) {
                setIndex(Math.floor(Math.random() * categories.length));
            }
            else {
                tempUsed[index] = true;
                setUsedCategories(tempUsed);
            }
        }
    }, [index]);

    return (
        <div className="Home">
            {index > 0 && <CategoryCard name={categories[index].strCategory} imgPath={categories[index].strCategoryThumb} />}
            <button>like</button>
            <button>dislike</button>
        </div>
    );
}

export default Home;
