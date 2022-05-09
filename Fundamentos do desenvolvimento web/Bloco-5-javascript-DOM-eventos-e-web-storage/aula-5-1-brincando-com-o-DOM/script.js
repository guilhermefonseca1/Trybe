function alteraCor (elementos, alteracao) {
    document.querySelector(elementos).style.backgroundColor = alteracao;
}

alteraCor('#third', 'rgb(10, 50, 200');
alteraCor('.main-title', 'green');

document.querySelector('header').className = 'yellow';

document.querySelector('#first').classList.add('red');
document.querySelector('.main-box').classList.add('selected');

document.querySelector('#third').classList.add('circle')