window.onload = () => {
    // Conteúdo das seções;
    const data = {
        about: "Olá! Me chamo Gabriel Eduardo Biasoli, tenho 22 anos e gosto muito de aprender e enfrentar novos desafios. Tenho experiência na área de seguros, principalmente seguros de automóveis e residências. Nos momentos de lazer, gosto de jogar videogames com meus amigos,  e também de entrar em contato com a natureza, que me ajudam a manter o equilíbrio e a mente aberta. Estou sempre em busca de oportunidades para crescer e contribuir positivamente!",
        formation: ["Sou formado em Técnico em informática pelo Colégio Estadual João Manoel Mondrone, onde desenvolvi habilidades na área da informática e programação. Durante meus estudos, concluí um curso de Desenvolvimento Web pela Trybe, que me proporcionou uma base sólida para minha carreira.", "Tenho fluência em Português do Brasil, e possuo conhecimentos intermediários em Inglês."],
        projects: "<b>Trybesmith:</b> O projeto Trybesmith consiste em uma API CRUD de itens medievais, foi feito usando tecnologias como TypeScript, Node.js e Express.<br>Link: <a href='https://github.com/GabrielBiasoli/trybesmith'>Clique aqui</a>",
    }

    // Insere a seção com id "content" na variável contentTag;
    const contentTag = window.document.getElementById('content');

    // Função para remover o a classe "active" do elemento que está ativo no momento;
    const removeActive = () => {
        const activeEle = window.document.getElementsByClassName('active')[0];
        activeEle.classList.remove('active');
    }

    // Função para adicionar a classe "active" no elemento selecionado;
    const addActive = (target) => {
        removeActive();
        clearContent();
        target.classList.add('active');
    }

    // Função para limpar o conteúdo da seção com id "content";
    const clearContent = (_ele) => contentTag.innerHTML = '';
 
    // Função para criar elemento com conteúdo.
    const createElement = (name, content) => {
        const element = window.document.createElement(name);
        if (content) element.innerHTML = content;
        
        return element;
    }

    // Resgata os elementos com a classe 'link', que são responsáveis por mudar o conteúdo da pág;
    const links = window.document.getElementsByClassName('link');

    // Função para gerar a seção 'Sobre mim'.
    const genAboutSection = (ele) => {
        if (ele.target.classList.contains('active')) return ;
        addActive(ele.target);

        const title = createElement('h1', 'Sobre mim');
        const aboutParagraph = createElement('p', data.about);

        contentTag.appendChild(title);
        contentTag.appendChild(aboutParagraph);
    }

    // Função para gerar a seção 'Formação';
    const genFomationSection = (ele) => {
        if (ele.target.classList.contains('active')) return;
        addActive(ele.target);

        const titleFormation = createElement('h1', 'Formação Educacional');
        const formation = createElement('p', data.formation[0]);
        const titleLanguages = createElement('h1', 'Idiomas');
        const languages = createElement('p', data.formation[1]);

        contentTag.appendChild((titleFormation));
        contentTag.appendChild((formation));
        contentTag.appendChild((titleLanguages));
        contentTag.appendChild((languages));
    }

    // Função para gerar a seção 'Projetos';
    const genProjectsSection = (ele) => {
        if (ele.target.classList.contains('active')) return;
        addActive(ele.target);

        const titleProjects = createElement('h1', 'Projetos');
        const projectsList = createElement('ul');
        const listItem = createElement('li', data.projects);

        projectsList.appendChild(listItem);
        contentTag.appendChild(titleProjects);
        contentTag.appendChild(projectsList);
    }

    // Função para gerar uma tag input conectada com uma tag label;
    const genInput = (name, display) => {
        const label = createElement('label', `${display}: `);
        const input = createElement('input');

        input.id = name;
        label.setAttribute('for', name);
        label.appendChild(input);

        return label;
    }

    // Função para gerar a seção 'Contato';
    const genContactSection = (ele) => {
        if (ele.target.classList.contains('active')) return;
        addActive(ele.target);

        const contactTitle = createElement('h1', 'Contato');
        const form = createElement('form');
        const nameInput = genInput('name', 'Nome');
        const emailInput = genInput('email', 'Email');

        form.appendChild(nameInput);
        form.appendChild(emailInput);

        const textAreaDiv = createElement('div');
        const textAreaLabel = createElement('label', 'Mensagem: ');
        const textArea = createElement('textarea');

        textAreaDiv.appendChild(textAreaLabel);
        textAreaDiv.appendChild(textArea);

        form.appendChild(textAreaDiv);

        contentTag.appendChild(contactTitle);
        contentTag.appendChild(form);

        const subButton = createElement('button', 'Enviar');
        contentTag.appendChild(subButton);
    }

    // Cria lista para facilitar a implementação dos eventos nos links;
    const linksFunction = [genAboutSection, genFomationSection, genProjectsSection, genContactSection];

    // Inclui funções nos links do conteúdo para atualizar o conteúdo da página;
    for (let index = 0; index < links.length; index+= 1) {
        links[index].addEventListener('click', linksFunction[index]);
    }
}
