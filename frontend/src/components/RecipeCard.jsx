// function RecipeCard({ recipe }) {
//     return (
//         <div className="grid w-40 h-20 p-4 mr-2 mb-2
//             border-1 border-red-500 rounded">
//             {recipe.strMeal}
//         </div>
//     )
// }

// export default RecipeCard

import { useState } from "react";

function RecipeCard({ recipe }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`perspective w-full h-64 cursor-pointer`}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`
                relative w-full h-full transition-transform duration-700
                transform-style-3d
                ${flipped ? "rotate-y-180 scale-110 z-50" : ""}
                `}
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg overflow-hidden border-1 border-gray-300">
                    <img
            src={recipe?.strMealThumb}
            alt={recipe?.title}
            className="w-full h-40 object-cover"
          />
                    <div className="p-3">
                        <h2 className="text-lg font-bold">{recipe?.strMeal}</h2>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-orange-50 rounded-xl shadow-lg p-4 overflow-auto">
                    <h2 className="text-lg font-bold mb-2">{recipe?.strMeal}</h2>

                    <h3 className="font-semibold">Ingredients</h3>
                    <ul className="text-sm list-disc pl-4 mb-2">
                        {/* {recipe?.ingredients.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))} */}
                    </ul>

                    <h3 className="font-semibold">Instructions</h3>
                    <p className="text-sm">{recipe?.instructions}</p>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;