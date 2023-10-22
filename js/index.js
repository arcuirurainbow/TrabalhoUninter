const content = document.getElementById('content');

function aboutRender() {
    content.innerHTML = `
    <h2>Bem-vindo ao Meu Site!</h1>
    <h1> Esse site é um dos trabalhos na qual estou utilizando HTML com CSS e Javascript.</p>`;
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
    <form id="formulario" autocomplete="off">
      <fieldset>
        <legend>Formulário</legend>
        <label>Nome:</label><input class="campo_nome" type="text"><br>
        <label>Email:</label><input class="campo_email" type="password"><br>
        <label>Mensagem:</label><br><textarea class="msg" cols="35" rows="8"></textarea><br>
        <input class="btn_submit" type="submit" value="Enviar">
      </fieldset>
    </form>`;

}

 


