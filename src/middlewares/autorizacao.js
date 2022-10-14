module.exports = (cargosObrigatorios) => (requiscao, resposta, proximo) => {
  if (cargosObrigatorios.indexOf(requiscao.user.cargo) === -1) {
    resposta.status(403);
    resposta.end();
    return;
  }
  proximo();
};
