const inputDiv = document.querySelector("#checkConwert");
const buttons = document.querySelectorAll("#direction");
const buttonResult = document.querySelector('#result');

inputDiv.addEventListener('click', selectButton);

for(i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', checkDirection);
}

buttonResult.addEventListener('click', showResult);

function selectButton(e)
{
    e.target.classList.toggle('check');
}


function checkDirection(e)
{
    console.log(e.target);
}

function showResult()
{

}