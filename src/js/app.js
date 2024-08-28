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
                <td><button class="delete">X</button></td>
                <td>${item.title}</td>
                <td><input class="quantity" type="number" value="1"></td>
                <td>${item.price}</td>
                </tr>`
}
addItem(product1);
addItem(product2);

// usuwanie wierszy

const deleteButtons = document.querySelectorAll('.delete');
const quantityInputs = document.querySelectorAll('.quantity');


for(i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', removeRow)
}

for(i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', removeRowFromQuantity)
}

function removeRow(e) {
    const row = e.target.closest('tr');
    row.remove();
}

function removeRowFromQuantity(e) {
    if(Number(e.target.value) === 0)
    {
        const row = e.target.closest('tr');
        row.remove();
    }
    
}

// podkreślanie tła

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
