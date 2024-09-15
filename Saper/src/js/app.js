// pobranie elementów DOM
const elements = document.querySelector('#elements');
const totalPoints = document.querySelector('#points');
const message = document.querySelector('#message');
let gameOver = true;
let points = 0;

//listenery
elements.addEventListener('click', showPlace);

function showPlace(e) {
    const td = e.target.closest('td');
    e.target.classList.add('show');
    if(td.dataset.points)
    {
        points += Number(td.dataset.points)
        totalPoints.innerHTML = points;
    }
    if(td.dataset.isBomb)
    {
        message.innerHTML = "Koniec gry!";
    }
}