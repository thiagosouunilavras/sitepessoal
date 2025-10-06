/* Assim que a página carrega o script pega o campo com id="telefone" e
a cada digitação ele remove tudo que não for número e limita o valor a 11 dígitos.
Aplica a formatação dinâmica (99) 99999-9999 */
document.addEventListener('DOMContentLoaded', function() {
      const telefone = document.getElementById('telefone');

    telefone.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value.length > 11) value = value.slice(0, 11); 

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, '($1');
    }

    e.target.value = value;
  });
});

/* O formulário com id="formContato" tem um listener de submit. Quando o usuário
clicar em enviar, o envio padrão é bloqueado o valor do campo email é capturado 
e validado com a função validarEmail(), a regex usada (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) 
verifica se o e-mail tem formato válido. Se for inválido mostra a mensagem de erro em 'mensagemErro' 
e foca no campo. Se for válido limpa a mensagem de erro, mostra um alert("Obrigado pela sua mensagem!") 
e reseta o formulário. */
document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const mensagemErro = document.getElementById('mensagemErro');

  const email = emailInput.value.trim();

  if (!validarEmail(email)) {
    mensagemErro.textContent = 'Por favor, insira um email válido.';
    emailInput.focus();
  } else {
    mensagemErro.textContent = '';
    alert("Obrigado pela sua mensagem!");
    this.reset();
  }
});

function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
