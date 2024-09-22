// Busca tudo que for digitado em Busca CEP
const inputBusca = document.querySelector('#input-cep');

// Pega o botão de busca
const btnBusca = document.querySelector('#btn-busca-cep');

const dadosBuscados = document.querySelector('.data-cep');

// Adiciona o evento de clique no botão de busca
btnBusca.addEventListener('click', procuraCep);

function procuraCep() {
    const cep = inputBusca.value;
    
    // Validação simples para garantir que o usuário inseriu um CEP válido
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        alert("Por favor, insira um CEP válido.");
        return;
    }

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(data => {
            if (!data.ok) {
                throw new Error('Erro na conexão via internet');
            }
            return data.json();
        })
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            mostrarDadosNaTela(data); // Nome correto da função
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
            alert(error.message); // Mostra o erro ao usuário, se ocorrer
        });
}

function mostrarDadosNaTela(dados) { 
    inputBusca.value = '';
    dadosBuscados.innerHTML = ''; // Limpa os dados anteriores

    dadosBuscados.innerHTML += `
        <ul>
            <li><b>RUA: </b> ${dados.logradouro}</li>
            <li><b>UF: </b> ${dados.uf}</li>
            <li><b>BAIRRO: </b> ${dados.bairro}</li> <!-- Chave correta -->
            <li><b>DDD: </b> ${dados.ddd}</li>
        </ul>
    `;
}
