const about = document.querySelector("#about");

const formulario = document.querySelector('#formulario')

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 
async function getAptGithub() 
{
    try {
    //Enviar uma requisição HTTP p/ a API do GITHUB
    const dadosPerfil = await fetch('https://api.github.com/users/wezzlim')

    //Converte a Resposta HTTP para o formato JSON
    const perfil = await dadosPerfil.json()

    //Criando o conteudo da seção about
    let conteudo = `
    
    <img src="${perfil.avatar_url}" alt="Foto do perfil do github - ${perfil.name}">

            <article id="about_texto">
                <h1>Sobre mim</h1>
                <p>Muito prazer, sou o Wesley — alguém curioso por natureza, sempre buscando aprender e criar. Gosto de transformar ideias em projetos — seja codando ou experimentando coisas novas. Atualmente, compartilho meus trabalhos no GitHub e uso este blog como uma forma de documentar o processo, dividir experiências e, quem sabe, inspirar outras pessoas pelo caminho. Agradeço a visita ao meu blog, espero que volte mais vezes!
                </p>

                <div id="about_github" class="flex about_github">
                    <a href="${perfil.html_url}" target="_blank" class="botao">Github </a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
            </article>
    `

    //Adicionar o conteúdo na página index.html, na Seção about
    about.innerHTML += conteudo;
    } catch (error)
      {
        console.error(error);
      }
}

formulario.addEventListener("submit", function(event)
{
    event.preventDefault()

    const campoNome = document.querySelector("#nome")
    const txtNome = document.querySelector("#txtNome")

    if(campoNome.value.lenght < 3)
    {
        txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres"
        campoNome.focus()
        return
    }
    else
    {
        txtNome.innerHTML = ""
    }

    const campoEmail = document.querySelector("#email")
    const txtEmail = document.querySelector("#txtEmail")

    if(!campoEmail.value.match(emailRegex))
    {
        txtEmail.innerHTML = "Digite um e-mail válido"
        campoEmail.focus()
        return
    }
    else
    {
        txtEmail.innerHTML = ""
    }

    const campoAssunto = document.querySelector("#assunto")
    const txtAssunto = document.querySelector("#txtAssunto")

    if(campoAssunto.value.lenght < 3)
    {
        txtAssunto.innerHTML = "O Assunto deve ter no mínimo 5 caracteres"
        campoAssunto.focus()
        return
    }
    else
    {
        txtAssunto.innerHTML = ""
    }

    // Enviar o email
    formulario.submit()

})

getAptGithub()