const calendario = document.querySelector('.calendario'); 
const diasDaSemana = document.querySelector('.diasDaSemana');
const nomeDoDia = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

function createSize(size) {
    for (let index = 1; index < size; index += 1) {
        const newDivDia = document.createElement('div');
        newDivDia.className = 'divBoard';
        newDivDia.innerText = index; 
        calendario.appendChild(newDivDia);
        if (index === 6) {newDivDia.id = 'friday-day'}
        if (index === 13) {newDivDia.id = 'friday-day'}
        if (index === 20) {newDivDia.id = 'friday-day'}
        if (index === 27) {newDivDia.id = 'friday-day'}
        if (index === 1) {newDivDia.id = 'holiday'}
    }
}
createSize(31);

    function imprimirNomeDoDia() {
        for (let index2 = 0; index2 < nomeDoDia.length; index2 += 1) {
        const newDivNomeSemana = document.createElement('div');
        newDivNomeSemana.className = 'divBoardNomeSemana';
        newDivNomeSemana.innerText = nomeDoDia[index2];
        diasDaSemana.appendChild(newDivNomeSemana);
        
    }
}
imprimirNomeDoDia();

const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', function() {
    const holidays = document.querySelectorAll('#holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor === 'white') {
            holidays[index].style.backgroundColor = 'red';
        } else {
            holidays[index].style.backgroundColor = 'white';
        }
    }
});

const fridayDays = [6, 13, 20, 27];
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function() {
    const fridays = document.querySelectorAll('#friday-day');
    for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML !== 'SEXTOU!') {
            fridays[index].innerHTML = 'SEXTOU!';
        } else {
            fridays[index].innerHTML = fridayDays[index];
        }
    }
})


