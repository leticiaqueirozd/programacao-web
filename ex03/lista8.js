const num = document.getElementById("num");
const res = document.getElementById("res");

const notas = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

function checar() {
    let numero = num.value;

    res.innerHTML = '';
    
    for (let nota of notas) {
        const qntd = parseInt(numero / nota);
        numero = parseFloat(numero % nota).toFixed(2);
        
        if (qntd > 0) {
            res.innerHTML += `${qntd} nota(s) de R$ ${nota} <br>`;
        }
    }
}