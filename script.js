// Dados iniciais (Exemplo do Treino 1)
const treinosCadastrados = {
    1: { nome: "Bíceps | Tríceps", exercicios: [
        { nome: "Rosca Direta", foto: "https://via.placeholder.com/150", sets: 3, descanso: "60s" },
        { nome: "Tríceps Pulley", foto: "https://via.placeholder.com/150", sets: 4, descanso: "45s" }
    ]},
    2: { nome: "Costas | Trapézio", exercicios: [] },
    // Adicione os outros treinos (3, 4, 5, 6) aqui seguindo o mesmo padrão
};

let usuarioAtual = "";
let treinoEmAndamento = [];

function selecionarUsuario(nome) {
    usuarioAtual = nome;
    document.getElementById('nome-logado').innerText = `Treinos de ${nome}`;
    document.getElementById('tela-usuarios').classList.add('hidden');
    document.getElementById('tela-divisao').classList.remove('hidden');
    renderizarMenuTreinos();
}

function renderizarMenuTreinos() {
    const lista = document.getElementById('lista-treinos');
    lista.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
        const info = treinosCadastrados[i] || { nome: "Vazio" };
        lista.innerHTML += `
            <div class="item-treino" onclick="iniciarTreino(${i})">
                <span><strong>Treino ${i}</strong> - ${info.nome}</span>
                <span>➔</span>
            </div>
        `;
    }
}

function iniciarTreino(id) {
    const treino = treinosCadastrados[id];
    document.getElementById('titulo-treino-atual').innerText = treino.nome;
    const lista = document.getElementById('exercicios-lista');
    lista.innerHTML = "";

    treino.exercicios.forEach((ex, indexEx) => {
        let seriesHTML = "";
        for (let s = 1; s <= ex.sets; s++) {
            seriesHTML += `
                <div class="linha-serie" id="serie-${indexEx}-${s}">
                    <span>${s}</span>
                    <input type="number" placeholder="Kg">
                    <input type="number" placeholder="Reps">
                    <button class="btn-check" onclick="marcarSerie(${indexEx}, ${s})">✓</button>
                </div>
            `;
        }

        lista.innerHTML += `
            <div class="card-exercicio">
                <img src="${ex.foto}" class="img-exercicio">
                <h3>${ex.nome} <small style="color:gray">(${ex.descanso})</small></h3>
                ${seriesHTML}
            </div>
        `;
    });

    document.getElementById('tela-divisao').classList.add('hidden');
    document.getElementById('tela-treino-ativo').classList.remove('hidden');
}

function marcarSerie(exId, sId) {
    const linha = document.getElementById(`serie-${exId}-${sId}`);
    linha.classList.toggle('concluida');
    linha.querySelector('.btn-check').classList.toggle('active');
}

function finalizarTreino() {
    const confirmacao = confirm("Deseja finalizar e salvar o treino?");
    if (confirmacao) {
        const resumo = {
            usuario: usuarioAtual,
            data: new Date().toISOString(),
            treino: document.getElementById('titulo-treino-atual').innerText
        };
        
        // Salva no Banco de Dados do Navegador (LocalStorage)
        let historico = JSON.parse(localStorage.getItem('historico_treinos') || "[]");
        historico.push(resumo);
        localStorage.setItem('historico_treinos', JSON.stringify(historico));

        alert("Treino salvo com sucesso! No final do ano faremos sua retrospectiva.");
        voltarParaDivisao();
    }
}

function voltarParaDivisao() {
    document.getElementById('tela-treino-ativo').classList.add('hidden');
    document.getElementById('tela-divisao').classList.remove('hidden');
}

function voltarParaUsuarios() {
    document.getElementById('tela-divisao').classList.add('hidden');
    document.getElementById('tela-usuarios').classList.remove('hidden');
}