document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Obrigado pela sua mensagem!");
  this.reset();
});
