
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
};
    const loadCategoryData = (id) =>{
        const url = `https://openapi.programming-hero.com/api/category/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayTree(data.plants));
    };
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500


    const displayTree=(trees)=>{
            const treeContainer = document.getElementById("tree-container");
            treeContainer.innerHTML = "";
            trees.forEach((tree)=>{
            console.log(trees);
            const treeCard = document.createElement("div");
            treeCard.innerHTML=`
           <div class="bg-white rounded-xl shadow-sm py-20 px-5 space-y-4 ">
                    <div class="">
                    <img class =" h-50 w-full" src="${tree.image}="" srcset="">
                    </div>
                    <h2 class="font-bold">${tree.name}</h2>
                    <p class="line-clamp-2">${tree.description}</p>
                    <div class="flex justify-between items-center">
                        <p class="bg-gray-200 px-2 rounded-sm">${tree.category}</p>
                        <p class="bg-gray-200 px-2 rounded-sm"><i class="fa-solid fa-dollar-sign"></i>${tree.price}</p>

                    </div>
                    <button class="btn bg-green-700 text-white rounded-2xl w-full  my-2">Add to cart</button>

                 </div>
            `;
            treeContainer.append(treeCard);

        
      });


    };

    const displayCategories = (categories) => {
        // console.log(categories);
        const container = document.getElementById("category-list");
        container.innerHTML = "";

        categories.forEach((category) => {
        
        const buttonContainer = document.createElement("div");
        
        
        buttonContainer.innerHTML = `
            <button onclick="loadCategoryData(${category.id})" class="btn btn-outline btn-success text-black  w-full mb-2  ">
                ${category.category_name}
            </button>
        `;
        
        container.appendChild(buttonContainer);
    });
};
loadCategories();


