const form = document.getElementById("FormAgenda")
const nomeContato = document.getElementById("NomeContato");
const numeroContato = document.getElementById("NumeroContato");
let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let linha = "<tr>"
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += `<tr>`

    linhas += linha;

    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
    
})

