function soma() {
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseFloat(a) + parseFloat(b);
}

function subtrai() {
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseFloat(a) - parseFloat(b);
}

function divide() {
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  if (parseFloat(b) === 0) {
    document.getElementById('demo').innerHTML = "Erro: divisão por zero!";
  } else {
    document.getElementById('demo').innerHTML = parseFloat(a) / parseFloat(b);
  }
}

function potencia() {
  var a = document.getElementById('valor01').value;
  var b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = Math.pow(parseFloat(a), parseFloat(b));
}