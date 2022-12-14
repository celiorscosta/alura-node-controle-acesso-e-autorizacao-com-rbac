const controle = require('../controle-de-acesso');

const metodos = {
  ler: {
    todos: 'readAny',
    apenasSeu: 'readOwn'
  },
  criar: {
    todos: 'createAny',
    apenasSeu: 'createOwn'
  },
  remover: {
    todos: 'deleteAny',
    apenasSeu: 'deleteOwn'
  }
};

module.exports = (entidade, acao) => (requiscao, resposta, proximo) => {
  const permissoesDoCargo = controle.can(requiscao.user.cargo);
  if (process.env.NODE_ENV !== 'production') {
    console.log(entidade);
    console.log(acao);
  }
  const acoes = metodos[acao];
  const permissaoTodos = permissoesDoCargo[acoes.todos](entidade);
  const permissaoApenasSeu = permissoesDoCargo[acoes.apenasSeu](entidade);

  if (permissaoTodos.granted === false && permissaoApenasSeu === false) {
    resposta.status(403);
    resposta.end();
    return;
  }

  requiscao.acesso = {
    todos: {
      permitido: permissaoTodos.granted,
      atributos: permissaoTodos.attributes
    },
    apenasSeu: {
      permitido: permissaoApenasSeu.granted,
      atributos: permissaoApenasSeu.attributes
    }
  };

  proximo();
};
