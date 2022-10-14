module.exports = (cargosObrigatorios) => (requiscao, resposta, proximo) => {
  if (cargosObrigatorios.indexOf(requiscao.user.cargo) === -1) {
    console.log('Esta rota está bloqueada');
  }
  proximo();
};
