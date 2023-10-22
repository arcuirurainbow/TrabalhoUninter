const content = document.getElementById('content');

function aboutRender() {
    content.innerHTML = `
    <h2>Bem-vindo ao Meu Site!</h1>
    <h3> Olá! Meu nome é Lucas, tenho 22 anos e atualmente estou dedicando meu tempo ao curso de Análise e Desenvolvimento de Sistemas.
    <h3> Sou apaixonado pelo mundo da tecnologia e estou sempre em busca de novos conhecimentos nessa área fascinante.
    <h3> Além dos estudos, gosto de mergulhar no universo dos jogos, explorando mundos virtuais e desafios empolgantes.
    <h3> Nas horas mais tranquilas, você pode me encontrar relaxando enquanto assisto a filmes, uma paixão que compartilho com minha admiração por games.
    <h3> Estou sempre aberto a novas experiências e oportunidades de aprendizado.`;
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
        <li>Link: <a target="_blank" href="https://github.com/arcuirurainbow">Github </a> </li>
    </ul>`;
}

function contactRender() {
    content.innerHTML = `
    <div id="area">
    <form id="Contato" autocomplete="off">
      <fieldset>
        <legend>Contato</legend>
        <label>Nome:</label><input name="username" type="text"><br>
        <label>Email:</label><input name="password" type="password"><br>
        <label>Mensagem:</label><br><textarea cols="35" rows="8"></textarea><br>
        <input type="submit" value="Enviar">
      </fieldset>
    </form></div>`;

}

 


