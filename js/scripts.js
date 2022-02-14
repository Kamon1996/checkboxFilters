let createProducts = function (array, count) {
  for (i = 0; i < count; i++) {
    array.push({
      img: "img/123 1.png",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description: `Your perfect pack for everyday use and walks in the forest.
        Stash your laptop (up to 15 inches) in the padded sleeve, your
        everyday`
    })
  }
}

let setNewArg = function (array, nameFilter, ...args) {
  let min = 0;
  let max = args.length - 1;
  array.forEach(element => {
    element[nameFilter] = args[Math.floor(Math.random() * (max - min + 1)) + min]
  });
}

let setNewMinMax = function (array, nameFilter, min, max, signs = 0.1) {
  signs = Math.pow(10, signs)
  array.forEach(element => {
    element[nameFilter] = Math.floor(Math.random() * signs * (max - min + 1)) / signs;
  });
}

let newId = -1;
function setNewId(array) {
  array.map(v => {
    newId++
    return v.id = newId;
  })
}

let products = [];
createProducts(products, 40);
setNewArg(products, "size", "XS", "S", "M", "L", "XL");
setNewMinMax(products, "price", 10, 1000, 2);
setNewMinMax(products, "rating", 1, 5, 1);
setNewMinMax(products, "count", 1, 120, 0);
setNewArg(products, "color", "blue", "gray", "beige", "black", "multicolor", "whie", "red", "purple");
setNewArg(products, "category", "men's clothing", "jewelery", "electronics", "women's clothing");
setNewId(products);


function partition(arr, arg, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end][arg];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i][arg] < pivotValue) {
      // Swapping elements
      [arr[i][arg], arr[pivotIndex][arg]] = [arr[pivotIndex][arg], arr[i][arg]];
      // Moving to next element
      pivotIndex++;
    }
  }
  // Putting the pivot value in the middle
  [arr[pivotIndex][arg], arr[end][arg]] = [arr[end][arg], arr[pivotIndex][arg]]
  return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}


const sectionMain = document.querySelector(".main__right");
let sectoinPageCouners;
let countOfpages;
let counterPageitems;

function displayProducts(arr, showPage = 1, countShow = 6) {
  arr = [...arr];
  countOfpages = Math.ceil(arr.length / countShow);
  sectionMain.innerHTML = ``;
  arr.splice(countShow * (showPage - 1), countShow).forEach((e) => {
    sectionMain.innerHTML += `
    <div class="item" id="${e.id}">
        <img src="${e.img}" alt="" />
        <h5>${e.title}</h5>
        <h6>$ ${e.price}</h6>
        <p class="item__description" >${e.description}</p>
        <div class="item__about">
          <h5>rating:<p>${e.rating}</p></h5>
          <h5>count:
          <p>${e.count}</p>
          </h5>
          <button>Добавить в корзину</button>
        </div>
    </div>
        `;
  });
  sectionMain.innerHTML += `
  <div class="page__counters" ></div>
  `
  sectoinPageCouners = document.querySelector('.page__counters');
  for (i = 1; i <= countOfpages; i++) {
    sectoinPageCouners.innerHTML += `
    <div class="page__counter-item">${i}</div>
    `
  }
  counterPageitems = document.querySelectorAll('.page__counter-item');
  counterPageitems.forEach(e => {
    e.addEventListener("click", () => {
      if (filteredArr.length === 0) {
        displayProducts(products, +e.innerHTML);
      } else {
        displayProducts(filteredArr, +e.innerHTML)
      }
    })
  })
}

displayProducts(products, 1);


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

let combineTwoArrs = function (arr) {
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

let compareAndFilter = function (arrFiltered, arrSelected = 0) {
  if (
    arrSelected.length > 0 &&
    arrFiltered.length === 0
  ) {
    filteredArr = [];
  } else if (arrFiltered.length > 0) {
    combineTwoArrs(arrFiltered);
  }
}

function filter() {
  filteredArr = [...products];

  compareAndFilter(categoryFilteredArr, categoriesSelected);
  compareAndFilter(colorFilteredsArr, colorsSelected);
  compareAndFilter(minPriceArr, minPriceInput.value);
  compareAndFilter(maxPriceArr, maxPriceInput.value);
  compareAndFilter(descriptionFilteredArr);
  compareAndFilter(titleFilteredArr);

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


minPriceInput.addEventListener("keydown", () => {
  minPriceArr = products.filter(v => minPriceInput.value <= v.price);
  filter();
})

minPriceInput.addEventListener("keyup", () => {
  minPriceArr = products.filter(v => minPriceInput.value <= v.price);
  filter();
})

maxPriceInput.addEventListener("keydown", () => {
  maxPriceArr = products.filter(v => maxPriceInput.value >= v.price);
  filter();
})

maxPriceInput.addEventListener("keyup", () => {
  maxPriceArr = products.filter(v => maxPriceInput.value >= v.price);
  filter();
})

searchInput.addEventListener("keydown", () => {
  descriptionFilteredArr = products.filter(v => v.description.includes(searchInput.value));
  titleFilteredArr = products.filter(v => v.title.includes(searchInput.value));
  filter();
})

searchInput.addEventListener("keyup", () => {
  descriptionFilteredArr = products.filter(v => v.description.includes(searchInput.value));
  titleFilteredArr = products.filter(v => v.title.includes(searchInput.value));
  filter();
})
