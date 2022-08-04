class FoodService {
    public async getAllCategories() {
        const rawRes = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const res = await rawRes.json();
        return res.categories;
    }
}

const foodService = new FoodService();
export default foodService;