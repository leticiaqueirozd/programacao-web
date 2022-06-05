function alerta() {
    const nome = document.getElementById("nome")
    const sobrenome = document.getElementById("sobrenome")
    alert("Olá, " + nome.value + " " +sobrenome.value);
}

function deletar() {
    const nome = document.getElementById("nome")
    const sobrenome = document.getElementById("sobrenome")
    const res = document.getElementById('res');
    
    res.innerHTML = " " 
    document.getElementById('nome','sobrenome').focus(); 
    nome.value = "  ";
    sobrenome.value = " ";
}