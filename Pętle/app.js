const user = {
    name: "Jan",
    age: 45,
}

Object
.values(user)
.forEach(value => console.log(value));

Object
.entries(user)
.forEach(value => console.log(value));

Object
.keys(user)
.forEach(value => console.log(value));

// Zad.1 

for(let i = 2; i <= 20; i = i + 2)
{
    //console.log(i);
}
console.log('Z Continue');
for(let i = 2; i <= 20; i++)
{
    if(i % 2 !== 0)
    {
        continue;
    }
    //console.log(i)
}

// Zad. 2

let suma = 0;
for(let i = 1; i < 101; i++)
{
    suma += i;
}

//console.log(suma);

// Zad. 3

//let text;
//let newText = '';

//text = window.prompt('Podaj tekst:');
//console.log

//for(let i = text.length; i > 0; i--)
//{

  //  newText += text[i-1];
//}

// console.log(newText);

// Zad. 4

let i = 1;
while(true)
{
    if(i % 13 === 0)
    {
        if(i > 40)
        {
            break;
        }
    }
    i++;
}
console.log(i);

// Zad. 5

const newUser = {
    name: 'Jan', 
    age: 20,
    car: "Ford Fiesta",
}

for(const key in newUser)
{
    console.log(`Pole "${key}" ma wartość ${newUser[key]}`);
}

Object
    .entries(newUser)
    .forEach(value => console.log(`Pole "${value[0]}" ma wartość:  ${value[1]}`));

