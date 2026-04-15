import { useRef, useEffect } from "react";

export default function RecipeCard({ recipe, activeCard, setActiveCard }) {
    const isOpen = activeCard === recipe.id;
    const ref = useRef();

    const ingredients = Object.entries(recipe)
        .filter(([key, value]) => key.startsWith("strIngredient") && value?.trim())
        .map(([key, ingredient]) => {
            const i = key.replace("strIngredient", "");
            return { ingredient, measure: recipe[`strMeasure${i}`] };
        });

    // Close on outside click
    useEffect(() => {
        function handleClick(e) {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setActiveCard(null);
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen, setActiveCard]);

    return (
        <>
            {/* DARK BACKDROP */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 transition-opacity"></div>
            )}

            <div
                className={`perspective ${isOpen
                    ? "fixed inset-0 flex items-center justify-center z-50"
                    : "relative"
                    }`}
            >
                <div
                    ref={ref}
                    onClick={() => !isOpen && setActiveCard(recipe.id)}
                    className={`
            transform-style-3d relative cursor-pointer
            transition-all duration-500 ease-in-out
            ${isOpen ? "w-[700px] h-[500px]" : "w-full h-64"}
          `}
                >
                    <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isOpen ? "rotate-y-180" : ""
                            }`}
                    >
                        {/* FRONT */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-xl overflow-hidden">
                            <img
                                src={recipe?.strMealThumb}
                                alt={recipe.strMeal}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-4">
                                <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
                                <p className="text-sm text-gray-500">
                                    Click to view recipe
                                </p>
                            </div>
                        </div>

                        {/* BACK */}
                        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white rounded-xl shadow-xl p-6 overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>

                            <h3 className="font-semibold mb-2">Ingredients</h3>
                            <ul className="list-disc pl-5 mb-4 text-sm">
                                {ingredients.map((item, i) => (
                                    <li key={i}>{item.measure} {item.ingredient}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold mb-2">Instructions</h3>
                            <p className="text-sm whitespace-pre-line">
                                {recipe?.strInstructions}
                            </p>

                            <button
                                onClick={() => setActiveCard(null)}
                                className="mt-6 px-4 py-2 bg-gray-900 text-white rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}