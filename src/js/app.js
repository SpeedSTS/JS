const product1 = {price: 10, title: "JS od podstaw" };
const product2 = {price: 20, title: "PHP od podstaw"};
const discount = 10;
let discountEnabled = false;
const items = document.querySelector('#items');
let counter = 1;
// itemsContainer.insertAdjacentHTML - (alternatywa dla innerHTML)
function addItem(item) { 
    items.innerHTML += `
                <tr>
                <td>${counter++}</td>
                <td>${item.title}</td>
                <td>1</td>
                <td>${item.price}</td>
                </tr>`
}
addItem(product1);
addItem(product2);

// możliwośc dodawania zniżki

function addDiscount(e) {
    console.log(e);
    discountEnabled = e.target.checked;
    if(discount > 0) {
        document.querySelector('#discount-amount').innerHTML = discount;
        document.querySelector('#discount').classList.toggle('hidden'); //classList.toggle (toggle - odwróć)
    }
    calculatePrice();
}

function calculatePrice() {
    let total = product1.price + product2.price;
    if(discountEnabled) {
        total -= discount;
    }
    document.querySelector('#total-price').innerHTML = total;
}

calculatePrice();

//listnery

document.querySelector('#add-discount').addEventListener('click', addDiscount);
