// some common dom element
const searchField = document.getElementById('search-field');
const allProducts = document.getElementById('all-products');
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
    allProducts.innerHTML = ''
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
    console.log(products.drinks);
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
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `;
        allProducts.appendChild(productCard);
    });
}