const products = [
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "red",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "red",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "red",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "red",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "red",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: "$109.95",
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `jewelery`,
    color: "red",
  },
];

const sectionMain = document.querySelector(".main__right");

function displayProducts(arr) {
  sectionMain.innerHTML = ``;
  arr.forEach((e) => {
    sectionMain.innerHTML += `
    <div class="item">
        <img src="${e.img}" alt="" />
        <h5>${e.title}</h5>
        <h6>${e.price}</h6>
        <p>${e.description}</p>
        <div class="item__about">
          <h5>rating: ${e.rating}</h5>
          <h5>count: ${e.count}</h5>
          <button>Добавить в корзину</button>
        </div>
    </div>
        `;
  });
}

displayProducts(products);
let filteredArr = [];

const colors = document.querySelectorAll("input[name=color]");
const categories = document.querySelectorAll('input[name="category"]');

function filter() {
  categories.forEach((elem) => {
    elem.addEventListener("click", () => {
        filteredArr = [];

      filteredArr = products.filter((value) => value.category === elem.value);
      displayProducts(filteredArr);
    });
  });
  colors.forEach((elem) => {
    elem.addEventListener("click", () => {
        filteredArr = [];
        filteredArr = products.filter((value) => value.category === elem.value);
      displayProducts(filteredArr);
    });
  });
}

filter();
