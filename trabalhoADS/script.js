let expressao = "";

function adicionar(valor) {
  expressao += valor;
  document.getElementById('display').value = expressao;
}

function limpar() {
  expressao = "";
  document.getElementById('display').value = "";
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
    document.getElementById('display').value = expressao;
  } catch {
    document.getElementById('display').value = 'Erro';
  }
}