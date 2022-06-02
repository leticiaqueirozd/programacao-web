var numeroSorteado = document.getElementById('res')
const botaoSortear = document.getElementById('gerar')
const pre = document.getElementById('pre')
const col = document.getElementById('colunas')
const resultadocol = document.getElementById('rescol')
const btnadicionar = document.getElementById('adicionar')
const tdnum = document.getElementById('num')
const thcol = document.getElementById('col')

var roleta = []

for(i = 1; i <= 100; i++){
    roleta.push(i)
}

botaoSortear.addEventListener("click", () => {
    
    pre.innerHTML = roleta[Math.floor(Math.random() * roleta.length)]

})
botaoSortear

adicionar.addEventListener('click', () => {
    if (col.value < 0) {
        alert('ERRO! Insira um número positivo')
        resultadocol.innerHTML = " "

    } else {
        if (col.value == 0 && col.value == 1) {
            num.innerHTML += '<br>'
        }
    
    resultadocol.innerHTML =  "Colunas: " + (col.value)
    tdnum.innerHTML += " " + pre.innerHTML

    for (i = 0; i < col.value; i++) {
        //const i = []
        thcol.innerHTML += "C" + i + " " 
        //if (i % col == 0) 
        //tdnum.innerHTML += '<br>'

    }
           
    }

    col.value = ""
    document.getElementById('colunas').focus()
})

function pular () {
    if (tdnum == "") {
        alert('Adicione o valor')
    } else {
        tdnum.innerHTML += '<br>'
    }
}