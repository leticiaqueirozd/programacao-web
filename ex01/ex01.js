const res = document.getElementById('res');
const num = document.getElementById('num');
const btnadc = document.getElementById('btnadc');
const btnlimp = document.getElementById('btnlimp');
const btnrem = document.getElementById('btnremove');

const lista = [];

function adicionar () { 
    
    lista.push(res.value);

    if (document.getElementById('num').value == '') {
        window.alert('Índice inválido!')
        li.innerHTML = "";
        document.getElementById('num').focus();
    }
    for (let i = 1; i <= Number.length; ++i) {
        res.innerHTML += `<li>${num.value}</li>`
    }
        res.innerHTML += `<button>Remover</button>`

    num.value = "";
    document.getElementById('num').focus();
}

function limpar () {
    res.innerHTML = "" 
    document.getElementById('num').focus(); 
    num.value = "";
}