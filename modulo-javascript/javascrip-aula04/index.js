function preencherSelects(tag, limite) {
  for (let i = 1; i < limite; i++) {
    dia.innerHTML += `<option>${i}</option> `;
  }
}

preencherSelects(dia, 32);
preencherSelects(mes, 13);
