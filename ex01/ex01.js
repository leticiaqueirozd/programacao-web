const res = document.getElementById('res');
const numero = document.getElementById('numero');
const add = document.getElementById('adicionar');
const limpar = document.getElementById('limpar');
const lista = [];

function add() {
    lista.push(res.value);

    if (document.getElementById('numero').value == '') {
        window.alert('ERRO! Elemento digitado não reconhecido.')
        li.innerHTML = "";
        document.getElementById('numero').focus();
    }
    for (let i = 1; i <= Number.length; i++) {
        res.innerHTML += `<li>${numero.value}</li>`

}

function deletar () {
    res.innerHTML = "" 
    document.getElementById('numero').focus(); 
    numero.value = "";

    }

}

