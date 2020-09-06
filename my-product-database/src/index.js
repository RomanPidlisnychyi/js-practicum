import './styles.scss';
import markup from './templates/markup.hbs';
import addProduct from './templates/addProduct.hbs';
import allProducts from './templates/allProducts.hbs';

let productArticle;

let products = JSON.parse(localStorage.getItem('products'));
const product = {};

document.querySelector('body').onclick = function(event) {
    products = JSON.parse(localStorage.getItem('products'));
    if (event.target === document.querySelector('.addBtn')) {
        document.querySelector('.products').innerHTML = '';
        event.target.classList.add('off');
        const murkup = addProduct();
        document.querySelector('.products').insertAdjacentHTML('beforeend', murkup);
    }
    if (
        event.target ===
        document.querySelector(`.close[data-close="${event.target.dataset.close}"]`)
    ) {
        const idToRemove = event.target.dataset.close;
        const removeElement = document.querySelector(
            `li[data-name="${idToRemove}"]`,
        );
        document.querySelector('.products').removeChild(removeElement);
        document.querySelector('.addBtn').classList.remove('off');
    }
    if (event.target === document.querySelector('#create')) {
        if (localStorage.getItem('products', JSON.stringify(products)) === null) {
            localStorage.setItem('products', JSON.stringify([]));
        }

        products = JSON.parse(localStorage.getItem('products'));

        products.push(product);

        localStorage.setItem('products', JSON.stringify(products));

        document.querySelector('#productName').value = '';
        document.querySelector('#article').value = '';
        document.querySelector('#count').value = '';
        event.target.disabled = true;
    }
    if (
        event.target ===
        document.querySelector(`.save[title="${event.target.title}"]`)
    ) {
        products.forEach((element, index, products) => {
            if (event.target.dataset.id === element.article) {
                products[index].count = product.count;
                localStorage.setItem('products', JSON.stringify(products));
                event.target.disabled = true;
            }
        });
    }
    if (
        event.target ===
        document.querySelector(`.delete[title="${event.target.title}"]`)
    ) {
        products.forEach((product, index) => {
            if (product.article === event.target.dataset.id) {
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                document.querySelector('.products').innerHTML = '';
            }
        });

        if (products.length < 1) {
            localStorage.removeItem('products');
            return;
        }
        const markup = allProducts(products);
        document.querySelector('.products').insertAdjacentHTML('beforeend', markup);
        document.querySelector('.addBtn').classList.remove('off');
    }
    if (event.target === document.querySelector('.getAllProducts')) {
        if (products === null) {
            return;
        }
        document.querySelector('.products').innerHTML = '';
        const markup = allProducts(products);
        document.querySelector('.products').insertAdjacentHTML('beforeend', markup);
        document.querySelector('.addBtn').classList.remove('off');
    }
};

document.querySelector('body').oninput = function(event) {
    products = JSON.parse(localStorage.getItem('products'));
    if (products !== null) {
        products.forEach(e => {
            if (`count-${e.name}` === event.target.name) {
                const saveBtn = document.querySelector(`[title="save-${e.name}"]`);
                saveBtn.dataset.count = event.target.value;
                if (e.count !== event.target.value && event.target.value !== '') {
                    saveBtn.disabled = false;
                } else {
                    saveBtn.disabled = true;
                }
            }
        });
    }
    if (event.target === document.querySelector('.queryId')) {
        productArticle = event.target.value;
    }

    if (event.target === document.querySelector('#productName')) {
        product.name = event.target.value;
    }

    if (event.target === document.querySelector('#article')) {
        product.article = event.target.value;
    }

    if (
        event.target ===
        document.querySelector(`.count[name="${event.target.name}"]`) ||
        event.target ===
        document.querySelector(`#count[name="${event.target.name}"]`)
    ) {
        product.count = event.target.value;
    }

    if (
        document.querySelector('#productName') !== null &&
        document.querySelector('#article') !== null &&
        document.querySelector('#count') !== null
    ) {
        let validatorName = [];
        let validatorArticle = [];

        if (products !== null) {
            validatorName = products.filter(
                e => e.name === document.querySelector('#productName').value,
            );

            validatorArticle = products.filter(
                e => e.article === document.querySelector('#article').value,
            );
        }

        if (validatorName.length === 0) {
            document.querySelector('#productName').classList.remove('unSccess');
        } else {
            document.querySelector('#productName').classList.add('unSccess');
        }

        if (validatorArticle.length === 0) {
            document.querySelector('#article').classList.remove('unSccess');
        } else {
            document.querySelector('#article').classList.add('unSccess');
        }

        if (
            document.querySelector('#productName').value !== '' &&
            document.querySelector('#article').value !== '' &&
            document.querySelector('#count').value !== ''
        ) {
            if (validatorName.length === 0 && validatorArticle.length === 0) {
                document.querySelector('#create').disabled = false;
            } else {
                document.querySelector('#create').disabled = true;
            }
        } else {
            document.querySelector('#create').disabled = true;
        }
    }
};

document.querySelector('body').onkeydown = function(event) {
    products = JSON.parse(localStorage.getItem('products'));
    if (event.key === 'Enter') {
        if (products === null) {
            document.querySelector('.queryId').value = '';
            return;
        }
        const findProduct = products.filter(
            product => productArticle === product.article,
        );

        if (findProduct.length < 1) {
            document.querySelector('.products').innerHTML = '';
            document.querySelector('.addBtn').classList.remove('off');
            document.querySelector('.queryId').value = '';
            productArticle = '';
            return;
        }

        const productMarkup = markup(findProduct[0]);

        document.querySelector('.products').innerHTML = '';

        document
            .querySelector('.products')
            .insertAdjacentHTML('beforeend', productMarkup);

        document.querySelector('.addBtn').classList.add('off');

        document.querySelector('.queryId').value = '';
        productArticle = '';
    }
};

document.querySelector('body').onchange = onInputFileChange;

function onInputFileChange(event) {
    if (event.target === document.querySelector('input[type="file"]')) {
        document.querySelector('img').src = window.URL.createObjectURL(
            event.target.files[0],
        );
        product.img = event.target.files[0].name;
    }
}