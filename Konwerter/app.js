// pobieranie elementów
const item = document.querySelector('#check');
const inLeft = document.querySelector('#inLeft');
const inRight = document.querySelector('#inRight');
const resultButton = document.querySelector("#checkResult");
const span = document.querySelector('#direction');
const inputs = document.querySelectorAll('input');
let units;
let inputResult;

// console.log(inputs);

// funkcje
function checkBox(e) {
    for(i = 0; i < item.children.length; i++)
    {
        item.children[i].classList.remove('check');
    }
    if(e.target.tagName === 'BUTTON')
    {
        e.target.classList.add('check');
    }
    units = e.target.dataset.name;
}

function selectDirection(e)
{
    inRight.classList.remove('check');
    e.target.classList.add('check');
    span.innerText = '<';
}
function selectDirectionTwo(e)
{
    inLeft.classList.remove('check');
    e.target.classList.add('check');
    span.innerText = '>'
}

function showResult()
{
    if(units === 'godziny')
    {
        if(span.innerText === '<')
        {
            inputs[0].value = inputs[1].value / 60;
        }
        if(span.innerText === '>')
        {
            inputs[1].value = inputs[0].value * 60;
        }
    }
    if(units === 'kilometry')
    {
        if(span.innerText === '<')
        {
            inputs[0].value = inputs[1].value * 1.6;
        }
        if(span.innerText === '>')
        {
            inputs[1].value = inputs[0].value * 0.62;
        }
    }

}

// podpięcie listenerów
item.addEventListener('click', checkBox);
inLeft.addEventListener('click', selectDirection);
inRight.addEventListener('click', selectDirectionTwo);
resultButton.addEventListener('click', showResult);






