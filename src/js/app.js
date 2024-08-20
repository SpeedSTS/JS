const product1 = {price: 10, title: "JS od podstaw" };
const product2 = {price: 20, title: "PHP od podstaw"};
const discount = 10;

const total = product1.price + product2.price;
const totalWithDiscount = total - discount;

document.querySelector('#total-price').innerHTML = total;
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