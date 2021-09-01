// some common dom element
const searchField = document.getElementById('search-field');
const allProducts = document.getElementById('all-products');
const randomProduct = document.getElementById('random-product');
const showDetails = document.getElementById('show-details');
// spinner
const spinner = document.getElementById('spinner');
spinner.classList.add('d-none')
// error message
const errorMessage = message => {
    const error = document.getElementById('search-error');
    error.innerText = `${message}`
}

// load data
const loadData = async () => {
    const searchText = searchField.value;
    allProducts.innerHTML = '';
    showDetails.innerHTML = '';
    // console.log(searchText);
    if (searchText === '') {
        errorMessage('⚠️ Please write something to show result.')
    } else {
        errorMessage('')
        spinner.classList.remove('d-none')
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
        try {
            const res = await fetch(url)
            const data = await res.json()
            searchField.value = ''
            showProducts(data);
        } catch {
            errorMessage('⚠️ Please by a valid Cocktail name.')
        }
    }
}
// display products by search
const showProducts = products => {
    // console.log(products.drinks);
    //spinner
    spinner.classList.add('d-none')
    products.drinks.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add('col')
        productCard.innerHTML = `
        <div class="card">
            <img src="${product.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.strDrink}</h5>
            <p class="card-text">${product.strInstructions.slice(0,150)}</p>
            <button class="btn btn-dark" onclick="productData('${product.idDrink}')">View More</button>
            </div>
        </div>
        `;
        allProducts.appendChild(productCard);

    });

}

// product details
const productData = async productId => {

    showDetails.innerHTML = '';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`;

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    productDetails(data.drinks[0])

}
const productDetails = product => {
    console.log(product);
    const div = document.createElement('div')
    div.classList.add('card');
    div.classList.add('shadow-lg');
    div.innerHTML = `
            <img src="${product.strDrinkThumb}" class="card-img-top rounded-3" alt="...">
            <div class="card-body">
            <h3>${product.strDrink}</h3>
            <p class="card-text">${product.strInstructions}</p>
            </div>
    `;
    showDetails.appendChild(div)
}

// show random product

const randomData = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    const res = await fetch(url)
    const data = await res.json()
    showRandomProduct(data.drinks[0])
};

const randomData2 = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    const res = await fetch(url)
    const data = await res.json()
    showRandomProduct3(data.drinks[0])
};

const randomData3 = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    const res = await fetch(url)
    const data = await res.json()
    showRandomProduct3(data.drinks[0])
};

randomData()



const showRandomProduct = product => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
            <img src="${product.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.strDrink}</h5>
            <p class="card-text">${product.strInstructions.slice(0,150)}</p>
            </div>
        </div>
        `;
    randomProduct.appendChild(div)
};
randomData2()
const showRandomProduct2 = product => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
            <img src="${product.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.strDrink}</h5>
            <p class="card-text">${product.strInstructions.slice(0,150)}</p>
            </div>
        </div>
        `;
    randomProduct.appendChild(div)
};
randomData3()
const showRandomProduct3 = product => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
            <img src="${product.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.strDrink}</h5>
            <p class="card-text">${product.strInstructions.slice(0,150)}</p>
            </div>
        </div>
        `;
    randomProduct.appendChild(div)
};