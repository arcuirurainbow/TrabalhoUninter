const content = document.getElementById('content');

function aboutRender() {
    content.innerHTML = `
    <h2>Bem-vindo ao Meu Site!</h1>
    <h1>Olá, meu nome é Lucas, tenho 22 anos e atualmente estou focado nos meus estudos na faculdade de analise e desenvolmente de sistemas. Esse site é um dos trabalhos na qual estou utilizando HTML com CSS e Javascript.</p>`;
}

function formationRender() {
    content.innerHTML = `
    <h1>Minha formação acadêmica:</h1>
    <ul>
        <li>Ensino Médico - Completo (E.E. Prof Caetano de Campos -2017)</li>
        <li>Ensino Superior - Cursando (Uninter - Previsão de conclusão)</li>
        <li>Curso avançado de inglês</li>
        <li>Pacote Office</li>
        <li>Conhecimento Basico em Banco de Dados</li>
        <li>Basico de linguagem de programação python</li>

    </ul>`;
}

function portRender() {
    content.innerHTML = `
    <h1>Meu portifólio:</h1>
    <ul>
        <li>Link:</li>
    </ul>`;
}

function contactRender() {
    content.innerHTML = `
    <h1> Meus contatos:</h1>
    <ul>
    <li>Meu Email:</h1>
    <li>Telefone:</h1>
    </ul>`;
}

    function renderHtml(name) {
        if (name == 'about') {
            content.innerHTML = `
            <h1>Bem-vindo ao Meu Site!</h1>
            <p>Olá meu nome é Lucas e este é o trabalho de HTML com CSS e javascript.</p>`;
        }
    
        if (name == 'formation') {
            content.innerHTML = `
            <h1>Minha formação acadêmica:</h1>
            <ul>
                <li>Ensino Médico - Completo (Escolha José Teobaldo - 2017)</li>
                <li>Ensino Superior - Cursando (Uninter - Previsão de conclusão)</li>
            </ul>`;
        }
}

