// pobieranie elementów
const item = document.querySelector('#check');
let units;

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

// podpięcie listenerów
item.addEventListener('click', checkBox);





