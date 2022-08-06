import RecipeModel from "../../../Models/recipeModel";
import "./IngredientsTable.css";

interface IngredientsTableProps {
    recipe: RecipeModel;
}

function IngredientsTable(recipe: RecipeModel): JSX.Element {
    return (
        <div className="IngredientsTable">
            <h2>Ingredients</h2>
            <table>
                <tr>
                    <th>Ingredient</th>
                    <th>Amount</th>
                </tr>
                {recipe.strIngredient1 && <>
                    <tr>
                        <td>{recipe.strIngredient1}</td>
                        <td>{recipe.strMeasure1}</td>
                    </tr>
                </>}
                {recipe.strIngredient2 && <>
                    <tr>
                        <td>{recipe.strIngredient2}</td>
                        <td>{recipe.strMeasure2}</td>
                    </tr>
                </>}
                {recipe.strIngredient3 && <>
                    <tr>
                        <td>{recipe.strIngredient3}</td>
                        <td>{recipe.strMeasure3}</td>
                    </tr>
                </>}
                {recipe.strIngredient4 && <>
                    <tr>
                        <td>{recipe.strIngredient4}</td>
                        <td>{recipe.strMeasure4}</td>
                    </tr>
                </>}
                {recipe.strIngredient5 && <>
                    <tr>
                        <td>{recipe.strIngredient5}</td>
                        <td>{recipe.strMeasure5}</td>
                    </tr>
                </>}
                {recipe.strIngredient6 && <>
                    <tr>
                        <td>{recipe.strIngredient6}</td>
                        <td>{recipe.strMeasure6}</td>
                    </tr>
                </>}
                {recipe.strIngredient7 && <>
                    <tr>
                        <td>{recipe.strIngredient7}</td>
                        <td>{recipe.strMeasure7}</td>
                    </tr>
                </>}
                {recipe.strIngredient8 && <>
                    <tr>
                        <td>{recipe.strIngredient8}</td>
                        <td>{recipe.strMeasure8}</td>
                    </tr>
                </>}
                {recipe.strIngredient9 && <>
                    <tr>
                        <td>{recipe.strIngredient9}</td>
                        <td>{recipe.strMeasure9}</td>
                    </tr>
                </>}
                {recipe.strIngredient10 && <>
                    <tr>
                        <td>{recipe.strIngredient10}</td>
                        <td>{recipe.strMeasure10}</td>
                    </tr>
                </>}
                {recipe.strIngredient11 && <>
                    <tr>
                        <td>{recipe.strIngredient11}</td>
                        <td>{recipe.strMeasure11}</td>
                    </tr>
                </>}
                {recipe.strIngredient12 && <>
                    <tr>
                        <td>{recipe.strIngredient12}</td>
                        <td>{recipe.strMeasure12}</td>
                    </tr>
                </>}
                {recipe.strIngredient13 && <>
                    <tr>
                        <td>{recipe.strIngredient13}</td>
                        <td>{recipe.strMeasure13}</td>
                    </tr>
                </>}
                {recipe.strIngredient14 && <>
                    <tr>
                        <td>{recipe.strIngredient14}</td>
                        <td>{recipe.strMeasure14}</td>
                    </tr>
                </>}
                {recipe.strIngredient15 && <>
                    <tr>
                        <td>{recipe.strIngredient15}</td>
                        <td>{recipe.strMeasure15}</td>
                    </tr>
                </>}
                {recipe.strIngredient16 && <>
                    <tr>
                        <td>{recipe.strIngredient16}</td>
                        <td>{recipe.strMeasure16}</td>
                    </tr>
                </>}
                {recipe.strIngredient17 && <>
                    <tr>
                        <td>{recipe.strIngredient17}</td>
                        <td>{recipe.strMeasure17}</td>
                    </tr>
                </>}
                {recipe.strIngredient18 && <>
                    <tr>
                        <td>{recipe.strIngredient18}</td>
                        <td>{recipe.strMeasure18}</td>
                    </tr>
                </>}
                {recipe.strIngredient19 && <>
                    <tr>
                        <td>{recipe.strIngredient19}</td>
                        <td>{recipe.strMeasure19}</td>
                    </tr>
                </>}
                {recipe.strIngredient20 && <>
                    <tr>
                        <td>{recipe.strIngredient20}</td>
                        <td>{recipe.strMeasure20}</td>
                    </tr>
                </>}
            </table>
        </div>
    );
}

export default IngredientsTable;
