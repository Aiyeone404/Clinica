var InputNome = document.getElementById('nome');
var InputIdade = document.getElementById('idade');
var InputTelefone = document.getElementById('phone');
var agendar = document.getElementById('agendar');
agendar.addEventListener('click', function () {
    var nome = InputNome.value.trim();
    var idadeTexto = InputIdade.value.trim();
    var telefone = InputTelefone.value.trim();
    if (nome.length === 0 || idadeTexto.length === 0 || telefone.length === 0) {
        alert("PREENCHA OS DADOS!");
        return;
    }
    var idade = Number(idadeTexto);
    if (idade > 100 || idade < 18) {
        alert("IDADE INVALIDA!");
        return;
    }
    if (telefone.length !== 11) {
        alert("COLOQUE APENAS NUMEROS SEM CARACTERES ESPECIAIS");
        return;
    }
    var BoxInsertDados = document.createElement('div');
    InputNome.value = "";
    InputIdade.value = "";
    InputTelefone.value = "";
    var InsertNome = document.createElement('span');
    InsertNome.textContent = "NOME: ".concat(nome.toLocaleUpperCase());
    var InserTIdade = document.createElement('span');
    InserTIdade.textContent = "IDADE: ".concat(idade);
    var InserTelefone = document.createElement('span');
    InserTelefone.textContent = "TELEFONE: ".concat(telefone);
    BoxInsertDados.appendChild(InsertNome);
    BoxInsertDados.appendChild(InserTIdade);
    BoxInsertDados.appendChild(InserTelefone);
    BoxInsertDados.id = 'BoxInsertDados';
    document.body.appendChild(BoxInsertDados);
});
