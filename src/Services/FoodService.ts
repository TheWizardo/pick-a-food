class FoodService {
    public async getAllCategories() {
        const rawRes = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const res = await rawRes.json();
        return res.categories;
    }

    public async getFromCategory(category: string) {
        const rawRes = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category);
        const res = await rawRes.json();
        return res.meals;
    }
    
    public async getMeal(mealId: number) {
        const rawRes = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId);
        const res = await rawRes.json();
        return res.meals[0];
    }
}

const foodService = new FoodService();
export default foodService;