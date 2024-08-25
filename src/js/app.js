const product1 = {price: 10, title: "JS od podstaw" };
const product2 = {price: 20, title: "PHP od podstaw"};
const discount = 10;
let discountEnabled = true;
// elementy DOM
const discountElement = document.querySelector('#discount');
const discoutCheckBox = document.querySelector('#add-discount');
const items = document.querySelector('#items');

let counter = 1;
// itemsContainer.insertAdjacentHTML - (alternatywa dla innerHTML)
function addItem(item) { 
    items.innerHTML += `
                <tr>
                <td>${counter++}</td>
                <td>${item.title}</td>
                <td><input type="number" value="1"></td>
                <td>${item.price}</td>
                </tr>`
}
addItem(product1);
addItem(product2);

function markBg(e) {
    if(e.target.tagName === "TD")
    {
        e.target.closest('tr').classList.toggle('marked'); //closest('name') - poszukiwanie najbliższego elementu o nazwie name
    }
    
}

// możliwośc dodawania zniżki

function addDiscount(e) {
    discountEnabled = e.target.checked;
    if(discount > 0) {
        document.querySelector('#discount-amount').innerHTML = discount;
        discountElement.classList.toggle('hidden'); //classList.toggle (toggle - odwróć)
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

discoutCheckBox.addEventListener('click', addDiscount);
items.addEventListener('click', markBg);

// zaznacz zniżkę na początku jeśli trzeba
const discountShouldBeEnabled = +discountElement.dataset.discountShouldBeEnabled;

if(discountShouldBeEnabled) {
    //discoutCheckBox.click();

    const clickEvent = new MouseEvent('click');
    discoutCheckBox.dispatchEvent(clickEvent)
;


}
