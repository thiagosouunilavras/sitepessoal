
document.addEventListener('DOMContentLoaded', function() {
      const telefone = document.getElementById('telefone');

    telefone.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número

    if (value.length > 11) value = value.slice(0, 11); // limita 11 dígitos

    // Formata (99) 99999-9999
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
