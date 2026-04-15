import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

function Home() {
    const MEAL_API_URL = "https://www.themealdb.com/api/json/v1/1/";
    const MEAL_SEARCH_URL = MEAL_API_URL + "search.php?s=";

    const [recipes, setRecipes] = useState([]);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        axios.get(MEAL_SEARCH_URL)
            .then((result) => {
                setRecipes(result.data.meals);
            })
    }, [])

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;