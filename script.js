const recipes = [
    {id: 1, title: "Оладки", description: "Пухкі смачні оладки", image:"https://images.unian.net/photos/2019_03/1551450139-3972.jpg?0.808903737771526", link:"pancakes.html"}   
    {id: 2, title: "Млинці", description: "Тонкі млинці на молоці", image:"https://rud.ua/uploads/under_recipe/retsept_mlyntsiv_na_molotsi.jpg", link:"crepes.html"}
    {id: 3, title: "Вареники", description: "Традиційні вареники з начинками", image:"https://fabbers.com.ua/wp-content/uploads/1-59.jpg", link:"dumplings.html"}
    {id: 4, title: "Борщ", description: "Український червоний борщ", image:"https://torchyn.ua/sites/default/files/2023-01/borsh-rebra.jpg" , link:"borsch.html"}
];

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");

function displayRecipes(filteredRecipes){
    recipeList.innerHTML = "";
    filteredRecipes.forEach((recipe) =>{
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            ${
                recipe.link
                ? `<div class="button-container">
                    <a href="${recipe.link}" class="view-link">Дізнатись більше</a>
                   </div>`
                : "" 
            }
            `;
            recipeList.appendChild(recipeCard);
        });
}

function filteredRecipes() {
    const query = searchInput.value.toLowerCase();
    const filtered = recipes.filter((recipe) =>
        recipe.title.toLowCase().includes(query)
    );
    displayRecipes(filtered);
}

// Відображення всіх рецептів при завантаженні сторінки //
displayRecipes(recipes);
serchInput.addEventListener("input", filteredRecipes)