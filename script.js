// ESTRUTURA DOS SEUS 6 TREINOS
const treinosCadastrados = {
    1: { 
        nome: "Bíceps | Tríceps", 
        exercicios: [
            { nome: "Rosca Direta", foto: "assets/rosca.jpg", sets: 3, descanso: "60s" },
            { nome: "Tríceps Pulley", foto: "assets/triceps.jpg", sets: 3, descanso: "60s" }
        ]
    },
    2: { 
        nome: "Quadríceps | Panturrilha | Lombar", 
        exercicios: [
            { nome: "Agachamento", foto: "assets/agachamento.jpg", sets: 4, descanso: "90s" },
            { nome: "Panturrilha em pé", foto: "assets/panturrilha.jpg", sets: 4, descanso: "45s" }
        ]
    },
    3: { 
        nome: "Peito | Ombro", 
        exercicios: [
            { nome: "Supino Reto", foto: "assets/supino.jpg", sets: 4, descanso: "60s" },
            { nome: "Desenvolvimento Ombro", foto: "assets/desenvolvimento.jpg", sets: 3, descanso: "60s" }
        ]
    },
    4: { 
        nome: "Costas | Trapézio", 
        exercicios: [
            { nome: "Puxada Pulley", foto: "assets/puxada.jpg", sets: 4, descanso: "60s" },
            { nome: "Encolhimento", foto: "assets/encolhimento.jpg", sets: 4, descanso: "45s" }
        ]
    },
    5: { 
        nome: "Posterior | Panturrilha | Lombar", 
        exercicios: [
            { nome: "Stiff", foto: "assets/stiff.jpg", sets: 4, descanso: "60s" },
            { nome: "Cadeira Flexora", foto: "assets/flexora.jpg", sets: 3, descanso: "60s" }
        ]
    },
    6: { 
        nome: "Bíceps | Tríceps", 
        exercicios: [
            { nome: "Rosca Martelo", foto: "assets/martelo.jpg", sets: 3, descanso: "60s" },
            { nome: "Tríceps Testa", foto: "assets/testa.jpg", sets: 3, descanso: "60s" }
        ]
    }
};

let usuarioAtual = "";

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
        const info = treinosCadastrados[i];
        lista.innerHTML += `
            <div class="item-treino" onclick="iniciarTreino(${i})">
                <span><strong>Treino ${i}</strong> - ${info.nome}</span>
                <span style="color: var(--blue)">➔</span>
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
                <img src="${ex.foto}" class="img-exercicio" onerror="this.src='https://via.placeholder.com/300x180?text=Sem+Foto'">
                <h3>${ex.nome} <small style="color:#0a84ff; font-size: 0.8rem;">⏱ ${ex.descanso}</small></h3>
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
    if(confirm("Concluir treino e salvar no histórico?")) {
        const log = {
            usuario: usuarioAtual,
            treino: document.getElementById('titulo-treino-atual').innerText,
            data: new Date().toLocaleString()
        };
        let historico = JSON.parse(localStorage.getItem('historico_gym') || "[]");
        historico.push(log);
        localStorage.setItem('historico_gym', JSON.stringify(historico));
        
        alert("Treino Concluído! Parabéns.");
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