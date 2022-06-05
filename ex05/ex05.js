Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "kYQNPbPGEz0dp7siKcwdDeYBIdyANQvbJ8Qtf9V5", // This is your Application ID
  "yV80N7m3ZKZmTgdMGlVDYJaEteabaXaUXeaT2VW9" // This is your Javascript key
);

function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosLeticia = ['Leticia', 'Marcio', 'Cecilia', 'Laura','Sabrina', 'Denilson', 'Jose Vitor', 'Carol', 'Allan']
    if (ConvidadosLeticia.includes(NomeConvidado)) {
      document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
  
    } else {
      document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
  }

