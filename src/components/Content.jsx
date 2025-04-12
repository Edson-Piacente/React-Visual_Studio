import React from "react";
import "./Content.css";


function Content() {
  return (
    <>
    {/* Contúdo */}
      <div className="container">
        <section className="d-1">
          <div className="d-2">
            <h2>Lançamento</h2>
            <p>
            O Visual Studio Code foi lançado pela Microsoft em 29 de abril de 2015.
            </p>
          </div>

          <div className="d-2">
            <h2>Quem criou</h2>
            <p>
            Foi desenvolvido pela Microsoft, com uma equipe liderada por Erich Gamma, um dos criadores do famoso padrão de design “Gang of Four” e do IDE Eclipse.
            </p>
          </div>

          <div className="d-2">
            <h2>Qual é a sua função</h2>
            <p>
            O VS Code é um editor de código-fonte leve, rápido e multiplataforma, feito para desenvolvedores.
Ele permite programar em várias linguagens, com destaque de sintaxe, autocompletar, debug, integração com Git, e suporte a extensões personalizadas.


            </p>
          </div>
        </section>

        {/* Beneficios */}

        <div className="container-2">
            <header id="h-2">
                <h1>Oque resolveu no mercado</h1>
                <p>Antes do VS Code, os programadores enfrentavam um dilema: ou utilizavam editores leves como o Sublime Text e o Notepad++, que ofereciam poucos recursos, ou precisavam instalar IDEs pesadas como o Visual Studio completo, o Eclipse ou o NetBeans, que consumiam muita memória e não eram práticas para pequenos projetos.</p>
            </header>
            <section className="beneficio">
                <h2>Facilitou o desenvolvimento</h2>
                <p>Ele permite programar em múltiplas linguagens sem precisar mudar de ambiente</p>
            </section>
            <section className="beneficio">
                <h2>Aumentou a produtividade</h2>
                <p>além de possuir um terminal integrado, integração direta com o Git e GitHub, suporte para desenvolvimento web, extensões específicas para frameworks como React, Angular e Vue, além de extensões para plataformas como Arduino e Python.</p>
            </section>
            <section className="beneficio">
                <h2>Deu suporte a times grandes com controle de versão, testes e deploy integrados</h2>
                <p>O Visual Studio Code também oferece ótimos recursos para trabalho em equipe e colaboração entre desenvolvedores. Por meio de extensões como o Live Share, os membros de um time podem editar e depurar o mesmo código em tempo real, mesmo estando em lugares diferentes. Isso é muito útil para pareamento, revisão de código, ou mentorias à distância.</p>
            </section>
        </div>

        {/* Exemplos */}
        
        <div className="container-3">
            <header id="h-3">
                <h1>exemplos de uso na Microsoft</h1>
                <p>A própria Microsoft utiliza o Visual Studio Code em diversos projetos internos e externos.<br /><br /></p>
            </header>
            <section className="tema">
                <h2>Ele é usado, por exemplo, para desenvolvimento em nuvem com o Azure, em conjunto com ferramentas como GitHub Codespaces.

</h2>
            </section>
            <section className="tema">
                <h2>Também é bastante utilizado em projetos com .NET, APIs web, aplicações em Node.js e TypeScript, além de estar presente em materiais de estudo e tutoriais oficiais da empresa, como no Microsoft Learn</h2>
            </section>
            <section className="tema">
                <h2>Apesar de existir o Visual Studio tradicional para projetos maiores, o VS Code se tornou o queridinho dos desenvolvedores para tarefas ágeis, desenvolvimento web, e ambientes leves.

<br /><br />
               

</h2>
            </section>
        </div>
      </div>
    </>
  );
}

export default Content;