document.getElementById('searchButton').addEventListener('click', searchRecipe);
document.getElementById('randomButton').addEventListener('click', generateRandomRecipe);

function searchRecipe() {
    const recipeInput = document.getElementById('recipeInput').value.trim();
    const display = document.getElementById('recipeDisplay');
    display.innerHTML = ''; // Clear previous results
    
    if (recipeInput) {
        display.innerHTML = `
            <div class="recipe-card">
                <img src="https://via.placeholder.com/100" alt="Food Image">
                <div>
                    <h2>${recipeInput} Delight</h2>
                    <p>Ingredients: Flour, Sugar, Eggs, Butter</p>
                    <p>Instructions: Mix all ingredients and bake for 30 minutes at 350°F.</p>
                </div>
            </div>`;
        const recipeData = {
                calories: "200 kcal",
                fat: "10 g",
                carbohydrates: "25 g",
                protein: "8 g",
                cholesterol: "30 mg",
                sodium: "200 mg",
                fiber: "5 g"
        };
        document.getElementById("calories").textContent = recipeData.calories;
        document.getElementById("carbohydrates").textContent = recipeData.carbohydrates;
        document.getElementById("protein").textContent = recipeData.protein;
        document.getElementById("cholesterol").textContent = recipeData.cholesterol;
        document.getElementById("sodium").textContent = recipeData.sodium;
        document.getElementById("fiber").textContent = recipeData.fiber;

        // Show the nutrition info section
        document.getElementById("nutritionInfo").style.display = "block";
    } else {
        display.innerHTML = `<p>Please enter an ingredient or recipe name.</p>`;
        document.getElementById("nutritionInfo").style.display = "none";
    }
}



function generateRandomRecipe() {
    const display = document.getElementById('recipeDisplay');
    display.innerHTML = ''; // Clear previous results

    const randomRecipes = [
        {
            name: 'Spaghetti Carbonara',
            image: 'https://via.placeholder.com/100',
            ingredients: 'Spaghetti, Eggs, Bacon, Parmesan',
            instructions: 'Cook spaghetti, mix with eggs, bacon, and cheese.',
            nutrition: {
                calories: "300 kcal",
                fat: "15 g",
                carbohydrates: "40 g",
                protein: "12 g",
                cholesterol: "50 mg",
                sodium: "400 mg",
                fiber: "3 g"
            }
        },
        {
            name: 'Taco Salad',
            image: 'https://via.placeholder.com/100',
            ingredients: 'Lettuce, Tomato, Cheese, Tortilla Chips',
            instructions: 'Mix all ingredients and serve with salsa.',
            nutrition: {
                calories: "300 kcal",
                fat: "15 g",
                carbohydrates: "40 g",
                protein: "12 g",
                cholesterol: "50 mg",
                sodium: "400 mg",
                fiber: "3 g"
            }
        },
        {
            name: 'Avocado Toast',
            image: 'https://via.placeholder.com/100',
            ingredients: 'Avocado, Bread, Salt, Olive Oil',
            instructions: 'Spread avocado on toasted bread, add salt and olive oil.',
            nutrition: {
                calories: "300 kcal",
                fat: "15 g",
                carbohydrates: "40 g",
                protein: "12 g",
                cholesterol: "50 mg",
                sodium: "400 mg",
                fiber: "3 g"
            }
        }
    ];

    // Choose a random recipe
    const recipe = randomRecipes[Math.floor(Math.random() * randomRecipes.length)];

    display.innerHTML = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="Food Image">
            <div>
                <h2>${recipe.name}</h2>
                <p>Ingredients: ${recipe.ingredients}</p>
                <p>Instructions: ${recipe.instructions}</p>
            </div>
        </div>`;
}
