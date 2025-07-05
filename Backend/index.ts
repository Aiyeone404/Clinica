let InputNome=document.getElementById('nome') as HTMLInputElement;
let InputIdade=document.getElementById('idade') as HTMLInputElement;
let InputTelefone=document.getElementById('phone') as HTMLInputElement;
let agendar=document.getElementById('agendar') as HTMLButtonElement;
agendar.addEventListener('click',()=>{
  const nome:string=InputNome.value.trim();
  const idadeTexto = InputIdade.value.trim();
  const telefone:string=InputTelefone.value.trim();

  if(nome.length===0 || idadeTexto.length===0 || telefone.length===0){
    alert("PREENCHA OS DADOS!")
    return;
  }
  const idade=Number(idadeTexto)

  if( idade>100 || idade<18){
    alert("IDADE INVALIDA!");
    return;
  }
  if(telefone.length!==11){
    alert("COLOQUE APENAS NUMEROS SEM CARACTERES ESPECIAIS");
    return;
  }

  let BoxInsertDados=document.createElement('div');
  InputNome.value=""
  InputIdade.value=""
  InputTelefone.value=""
  const InsertNome=document.createElement('span');
  InsertNome.textContent=`NOME: ${nome.toLocaleUpperCase()}`;
  const InserTIdade=document.createElement('span');
  InserTIdade.textContent=`IDADE: ${idade}`;
  const InserTelefone=document.createElement('span');
  InserTelefone.textContent=`TELEFONE: ${telefone}`;

  BoxInsertDados.appendChild(InsertNome);
  
  BoxInsertDados.appendChild(InserTIdade);
  
  BoxInsertDados.appendChild(InserTelefone);

  BoxInsertDados.id = 'BoxInsertDados'; 
  document.body.appendChild(BoxInsertDados);
})