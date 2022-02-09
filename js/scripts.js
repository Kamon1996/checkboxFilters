const products = [
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 10.95,
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
    price: 20.95,
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "black",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 40.95,
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "blue",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `men's clothing`,
    color: "blue",
  },
  {
    img: "img/123 1.png",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 800.95,
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
    price: 5000.95,
    description: `Your perfect pack for everyday use and walks in the forest.
    Stash your laptop (up to 15 inches) in the padded sleeve, your
    everyday`,
    rating: 3.9,
    count: 120,
    category: `jewelery`,
    color: "red",
  },
];

let newId = 0;
products.map(v => {
  newId++
  return v.id = newId;
})

const sectionMain = document.querySelector(".main__right");

function displayProducts(arr) {
  sectionMain.innerHTML = ``;
  arr.forEach((e) => {
    sectionMain.innerHTML += `
    <div class="item" id="${e.id}">
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

let categoryFilteredArr = [];
let colorFilteredsArr = [];
let minPriceArr = [];
let maxPriceArr = [];
let descriptionFilteredArr = [];
let titleFilteredArr = [];

let filteredArr = [];


const colors = document.querySelectorAll("input[name=color]");
const categories = document.querySelectorAll('input[name="category"]');
const minPriceInput = document.querySelector('#minPrice');
const maxPriceInput = document.querySelector('#maxPrice');
const searchInput = document.querySelector('.main__search');


let categoriesSelected = [];
let colorsSelected = [];

let filter2Arr = function (arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    console.log(i)
    for (j = 0; j < filteredArr.length; j++) {
      if (filteredArr[j].id === arr[i].id) {
        newArr.push(filteredArr[j]);
      }
    }
  }
  filteredArr = [...newArr];
}


function filter() {
  filteredArr = [...products];
  if (
    categoriesSelected.length > 0 &&
    categoryFilteredArr.length === 0
  ) {
    filteredArr = [];
  } else if (categoryFilteredArr.length > 0) {
    filter2Arr(categoryFilteredArr);
  }

  if (
    colorsSelected.length > 0 &&
    colorFilteredsArr.length === 0
  ) {
    filteredArr = [];
  } else if (colorFilteredsArr.length > 0) {
    filter2Arr(colorFilteredsArr);
  }

  if (
    minPriceInput.value.length > 0 &&
    minPriceArr.length === 0
  ) {
    filteredArr = [];
  } else if (minPriceArr.length > 0) {
    filter2Arr(minPriceArr);
  }

  if (
    maxPriceInput.value.length > 0 &&
    maxPriceArr.length === 0
  ) {
    filteredArr = [];
  } else if (maxPriceArr.length > 0) {
    filter2Arr(maxPriceArr);
  }

  if (descriptionFilteredArr.length > 0) {
    filter2Arr(descriptionFilteredArr);
  }

  if (titleFilteredArr.length > 0) {
    filter2Arr(titleFilteredArr);
  }

  if (
    searchInput.value.length > 0 &&
    descriptionFilteredArr.length === 0 &&
    titleFilteredArr.length === 0
  ) {
    filteredArr = [];
  }
  displayProducts(filteredArr);
}


categories.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.checked === true) {
      categoriesSelected.push(elem.value)
      categoryFilteredArr = [...products.filter(v => v.category === elem.value), ...categoryFilteredArr];
      console.log(categoryFilteredArr)
      filter();
    } else {
      categoriesSelected.splice(categoriesSelected.indexOf(elem.value), 1)
      categoryFilteredArr = categoryFilteredArr.filter(v => v.category != elem.value)
      filter();
    }
  });
});


colors.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.checked === true) {
      colorsSelected.push(elem.value);
      colorFilteredsArr = [...products.filter(v => v.color === elem.value), ...colorFilteredsArr];
      filter();
    } else {
      colorsSelected.splice(colorsSelected.indexOf(elem.value), 1);
      colorFilteredsArr = colorFilteredsArr.filter(v => v.color != elem.value);
      filter();
    }
  });
});


minPriceInput.addEventListener("keyup", () => {
  minPriceArr = products.filter(v => minPriceInput.value <= v.price);
  filter();
})

maxPriceInput.addEventListener("keyup", () => {
  maxPriceArr = products.filter(v => maxPriceInput.value >= v.price);
  filter();
})

searchInput.addEventListener("keyup", () => {
  descriptionFilteredArr = products.filter(v => v.description.includes(searchInput.value));
  titleFilteredArr = products.filter(v => v.title.includes(searchInput.value));
  filter();
})
