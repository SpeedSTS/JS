// pobieranie elementów
const item = document.querySelector('#check');

// funkcje
function checkBox(e) {

    if(e.target.tagName === 'BUTTON')
    {
        e.target.classList.add('check');
    }
    
}

// podpięcie listenerów

item.addEventListener('click', checkBox);





