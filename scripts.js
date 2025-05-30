function mostrarProjetos() {
    const projetosList = [
        "Projeto de Agricultura Urbana em São Paulo",
        "Integração de Energias Renováveis entre Campo e Cidade",
        "Programa de Educação Ambiental Rural e Urbana"
    ];

    const projetosContainer = document.getElementById('projetos-list');
    
    projetosList.forEach(projeto => {
        const p = document.createElement('p');
        p.textContent = projeto;
        projetosContainer.appendChild(p);
    });

    const button = document.querySelector('button');
    button.style.display = 'none'; // Esconde o botão após exibir os projetos
}