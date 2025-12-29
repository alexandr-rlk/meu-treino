:root {
    --preto: #000000;
    --cinza-card: #1c1c1e;
    --azul: #0a84ff;
    --texto-secundario: #8e8e93;
}

body {
    background-color: var(--preto);
    color: white;
    font-family: -apple-system, system-ui, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.hidden { display: none !important; }

/* Tela de Seleção */
.tela-cheia {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-login { text-align: center; cursor: pointer; }
.avatar-perfil {
    width: 120px; height: 120px; border-radius: 50%;
    border: 3px solid var(--azul); overflow: hidden; margin-bottom: 15px;
}
.avatar-perfil img { width: 100%; height: 100%; object-fit: cover; }

/* Header Premium */
.header-app {
    padding: 50px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user-info { display: flex; align-items: center; gap: 12px; }
.foto-thumb { width: 45px; height: 45px; border-radius: 50%; border: 1.5px solid var(--azul); }
.label { color: var(--texto-secundario); font-size: 0.8rem; }
.username { margin: 0; font-size: 1.1rem; }
.btn-config { background: none; border: none; color: white; font-size: 1.2rem; }

/* Banner Treino */
.banner-treino {
    background-color: var(--cinza-card);
    margin: 20px;
    padding: 25px;
    border-radius: 25px;
}
.status-badge {
    background: rgba(10, 132, 255, 0.2);
    color: var(--azul);
    display: inline-block;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: bold;
    margin-bottom: 15px;
}
.prof-name { color: var(--texto-secundario); margin: 5px 0; }
.semana-tracker { display: flex; gap: 8px; margin: 20px 0; }
.semana-tracker span {
    width: 28px; height: 28px; background: #333; 
    border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;
}
.semana-tracker span.active { background: var(--azul); }

.btn-principal {
    width: 100%; background: var(--azul); border: none; color: white;
    padding: 15px; border-radius: 15px; font-weight: bold; font-size: 1rem;
}

/* Mini Player */
.mini-player {
    position: fixed; bottom: 90px; left: 15px; right: 15px;
    background: #2c2c2e; padding: 15px; border-radius: 20px;
    display: flex; justify-content: space-between; align-items: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
}
.ex-nome { font-weight: bold; font-size: 0.9rem; }
.ex-info { font-size: 0.75rem; color: var(--texto-secundario); margin-top: 4px; display: flex; gap: 10px;}
.player-actions { display: flex; align-items: center; gap: 15px; }
.btn-step { background: none; border: none; color: white; font-size: 1.1rem; }
.btn-play-check {
    background: var(--azul); border: none; width: 42px; height: 42px;
    border-radius: 50%; color: white;
}

/* Tab Bar */
.tab-bar {
    position: fixed; bottom: 0; width: 100%;
    background: #111; display: flex; padding: 10px 0 30px;
    border-top: 0.5px solid #333;
}
.tab-item { flex: 1; text-align: center; color: var(--texto-secundario); }
.tab-item.active { color: var(--azul); }
.tab-item i { font-size: 1.2rem; display: block; margin-bottom: 4px; }
.tab-item span { font-size: 0.65rem; }