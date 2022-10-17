const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    if(order.find(item => item.id === productId)) {
        alert("Товар уже в корзине");
    }
    else {
        order.push(products.find(item => item.id === productId));
    }
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    if(order.find(item => item.id === productId)) {
        order.splice(order.findIndex(item => item.id === productId), 1);
    }
    else {
        alert("Такого товара в корзине нет");
    }
    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    let totalPrice = 0;
    order.map(item => totalPrice += item.price);
    document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}
