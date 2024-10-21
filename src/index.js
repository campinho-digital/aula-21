///funçao
///objeto
///if else
/// regex- expressão regular
/// DOM
///POO
//parametros

const criterioSenha = {
  comprimentoMin: 8,
  contemNumero: /\d/,
  contemLetraMaiuscula: /[A-Z]/,
  contemLetraMinuscula: /[a-z]/,
  contemCaracterEspecial: /[^a-zA-Z0-9]/,
  contemEspacos: /\s/,
  contemCaracterEspecialEspacos: /[^a-zA-Z0-9\s]/,
  contemCaracterEspecialEspacosBrancos: /[^a-zA-Z0-9\s\S]/,
    
};

function validaSenha(senha) {
  if (senha.length < criterioSenha.comprimentoMin) {
    return "Senha deve ter pelo menos 8 caracteres";
  }

  if (!criterioSenha.contemNumero.test(senha)) {
    return "Senha deve ter Numeros";
  }

  if (!criterioSenha.contemLetraMaiuscula.test(senha)) {
    return "Senha deve ter letras maiusculas";
  }
  return "";
}




function verificaSenha(event) {
  event.preventDefault();
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  const erro = validaSenha(senha);
  mensagem.textContent = "";

  if (erro) {
    console.log(erro);
    mensagem.textContent = erro;
    mensagem.className = "error";
  } else {
    //homes
    //dashboard
    //PERFIL
    console.log("sucesso");

    mensagem.textContent = "Senha válida";
    mensagem.className = "success";
  }
}

document.getElementById("formSenha").addEventListener("submit", verificaSenha);
