const product1 = {price: 10 };
const product2 = {price: 20 };
const discount = 10;

const total = product1.price + product2.price;
const totalWithDiscount = total - discount;
console.log(`Cena przed zniżką ${total} natomiast cena po zniżce ${totalWithDiscount}`);