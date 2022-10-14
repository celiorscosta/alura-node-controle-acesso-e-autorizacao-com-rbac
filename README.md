# NodeJS: controle de acesso e autorização com RBAC

| :placard: API em NodeJS |     |
| -------------  | --- |
| :sparkles: Nome        | **NodeJS: controle de acesso e autorização com RBAC**
| :label: Tecnologias | NodeJS, Redis

Neste curso utilizamos o projeto do curso anterior [Node.js e JWT: autenticação com tokens](https://github.com/celiorscosta/alura-node-jwt-autenticacao-refresh-token), onde implementaremos as rotinas controle de acesso e autorização com RBAC.

> Uma API de blog em Node.js

## Tópicos abordados.

 - Entenda como funciona o controle de acesso e autorização
 - Aprenda as melhores práticas do mercado em refatoração de código
 - Implemente controle de acesso usando técnicas avançadas como RBAC e PBAC
 - Saiba como documentar o controle de acesso para sua empresa
 - Descubra como gerar documentações baseadas no seu código com esdoc

## Project setup

> Instale os pacotes usando o comando abaixo:
```
npm install
```

> Antes de rodar o sistema para testar, é necessario criar na raiz do projeto um arquivo chamado `.env`.
> Dentro deste arquivo você devera adicionar o código abaixo:

```
CHAVE_JWT="coloque-sua-chave-secreta-aqui"
BASE_URL="localhost:3000"

EMAIL_HOST="smtp.gmail.com"
EMAIL_USUARIO="<seu usuário de e-mail>@gmail.com"
EMAIL_SENHA="<sua senha>"

NODE_ENV="development"
```

> Para gerar a chave rode no seu terminal o comando:

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"
```

> Copie a string gerada após a conclusão do comando e cole no lugar de "coloque-sua-chave-secreta-aqui".

### Redis

> Para criar a blacklist de tokens, foi utilizado o Redis para persistir essa informação, neste ponto deixo a seu critério se irá instalar ou rodar em uma imagem do docker.
> No meu caso usei o Docker e rodei tudo dentro do WSL2.

Pronto, feito isso, agora é só rodar!
```
npm run dev
```
