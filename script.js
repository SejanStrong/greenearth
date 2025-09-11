const loadcatagory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((cat) => cat.json())
        .then((data) => displayCatagory(data.categories));

};
// const cardload = (id) => {

//     const url = `https://openapi.programming-hero.com/api/category/${id}`;

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => console.log(data));


// }

const loadCard = (id) => {

    // const url = `https://openapi.programming-hero.com/api/category/${id}`;

    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then((response) => response.json())
        .then(data => displayCard(data.plants));
    ````

};

const displayCard = (cards) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    for (const card of cards) {
        console.log(card);
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
        
           <div class="card bg-base-100 w-60 py-3 shadow-sm">
  <figure>
    <img src ="${card.image}"/>
  </figure>
  <div class="card-body">
    <h2 class="card-title">${card.name}</h2>
    <p>
    
    ${card.description}
</p>
    <h3>${card.category}</h3>
    <p>${card.price}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
        
        
        `;
        cardContainer.appendChild(cardDiv);
    }
}

//${catagory.catagory_name}
loadcatagory()

const displayCatagory = (catagorys) => {

    console.log(catagorys)
    const catagoryContainer = document.getElementById("catagory-container")
    for (const catagory of catagorys) {
        console.log(catagory);
        const catagoryBtn = document.createElement("button");

        catagoryBtn.innerHTML = `<button onclick="loadCard(${catagory.id})" class= " btn btn-outline btn-primary w-full ">${catagory.category_name}</button>
            `;
        catagoryContainer.appendChild(catagoryBtn);

    }
}

/* const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/plants")

        .then((res) => res.json())
        .then((data) => displaylessons(data.plants));

};

const displaylessons = (lessons) => {

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    for (const lesson of lessons) {
        console.log(lesson);
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = ``
    }
}

loadlessons()  */


document.getElementById('checkout').addEventListener('click', () => {
    if (!cart.length) return alert('Your cart is empty.');
    alert(`Thank you! You planted ${cart.length} tree(s). Total: ${formatPrice(getCartTotal())}`);
    cart = [];
    renderCart();
});