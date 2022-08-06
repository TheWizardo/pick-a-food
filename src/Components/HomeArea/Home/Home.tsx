import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryModel from "../../../Models/categoryModel";
import foodService from "../../../Services/FoodService";
import randomService from "../../../Services/RandomService";
import CategoryCard from "../CategoryCard/CategoryCard";
import { BsHeart } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import "./Home.css";


function Home(): JSX.Element {

    const [categories, setCategories] = useState<CategoryModel[]>();
    const [usedCategories, setUsedCategories] = useState<boolean[]>([]);
    const [index, setIndex] = useState<number>(-1);
    const navigate = useNavigate();

    function checkAllUsed() {
        if (usedCategories.every(e => e)) {
            console.log("clear");
            const clearArr = Array.from(Array(categories.length).keys()).map(e => false);
            setUsedCategories(clearArr);
            setIndex(randomService.randomNumberFromArray(clearArr));
            return true;
        }
        return false;
    }

    function clickLike() {
        navigate("/category/" + categories[index].strCategory);
    }

    function clickDislike() {
        const tempUsed = usedCategories;
        tempUsed[index] = true;
        setUsedCategories(tempUsed);
        if (!checkAllUsed()) {
            setIndex(randomService.randomNumberFromArray(usedCategories));
        }
    }

    useEffect(() => {
        (async () => {
            setCategories(await foodService.getAllCategories());
        })();
    }, []);

    useEffect(() => {
        console.log("setting up");
        if (categories) {
            const clearArr = Array.from(Array(categories.length).keys()).map(e => false);
            setUsedCategories(clearArr);
            setIndex(randomService.randomNumberFromArray(clearArr));
        }
    }, [categories]);

    return (
        <div className="Home">
            {index >= 0 && <CategoryCard name={categories[index].strCategory} imgPath={categories[index].strCategoryThumb} />}
            <div className="container">
                <div></div>
                <button onClick={clickDislike} className="dislike">
                    <CgClose />
                </button>
                <div></div>
                <div></div>
                <button onClick={clickLike} className="like">
                    <BsHeart />
                </button>
                <div></div>
            </div>
        </div>
    );
}

export default Home;
