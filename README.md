# Busca por CEP

Este projeto é uma aplicação web simples que permite ao usuário buscar informações sobre um CEP específico, utilizando a API pública ViaCEP.

## Funcionalidades

- **Buscar CEP**: Os usuários podem inserir um CEP para obter informações como rua, bairro, cidade e estado.
- **Validação de CEP**: A aplicação verifica se o CEP inserido é válido antes de fazer a busca.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização da página.
- **JavaScript**: Lógica de interação da aplicação.

## Estrutura do Projeto

### HTML

O arquivo `index.html` contém a estrutura básica da página:
- Campo para inserção do CEP.
- Botão para realizar a busca.
- Área para exibição das informações retornadas pela API.

### CSS

Os estilos estão definidos em dois arquivos:
- `reset.css`: Remove os estilos padrões do navegador para garantir consistência.
- `styles.css`: Contém todos os estilos específicos da aplicação, como posicionamento dos elementos, estilos de botões, etc.

### JavaScript

O script `script.js` contém toda a lógica da aplicação:
- Seleção dos elementos da página.
- Evento de clique do botão que dispara a função de busca.
- Função `procuraCep` que faz a chamada à API ViaCEP e trata a resposta.
- Função `mostrarDadosNaTela` que exibe os dados na página.

## Como Usar

1. **Abra a página**: Acesse o arquivo `index.html` com um navegador de sua escolha.
2. **Digite um CEP**: Insira um CEP no campo de entrada.
3. **Clique em Pesquisar**: Após clicar no botão, as informações sobre o CEP serão exibidas abaixo do campo de entrada.

## Exemplo de Uso

Suponha que você quer buscar informações sobre o CEP `01001-000`:
- Digite `01001-000` no campo de entrada.
- Clique em "Pesquisar".
- As informações como rua, bairro, UF e DDD serão exibidas na tela.

## Contribuições

Contribuições são sempre bem-vindas. Por favor, envie um pull request ou abra uma issue para discutir as mudanças propostas.

