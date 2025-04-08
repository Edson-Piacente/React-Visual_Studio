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
            O Visual Studio foi lançado pela primeira vez em 1997.
            </p>
          </div>

          <div className="d-2">
            <h2>Quem criou</h2>
            <p>
            Ele foi criado pela Microsoft como um ambiente de desenvolvimento integrado (IDE).
            </p>
          </div>

          <div className="d-2">
            <h2>Qual é a sua função</h2>
            <p>
            O Visual Studio serve para desenvolver aplicações
            </p>
          </div>
        </section>

        {/* Beneficios */}

        <div className="container-2">
            <header id="h-2">
                <h1>Oque resolveu no mercado</h1>
                <p>Antes do Visual Studio, os desenvolvedores usavam ferramentas separadas pra codar, compilar, depurar, etc.</p>
            </header>
            <section className="beneficio">
                <h2>Facilitou o desenvolvimento</h2>
                <p>Um editor de texto (ex: Notepad) <br />Um compilador separado (pra transformar o código em programa) <br />Um depurador (separado também) <br />E fazer tudo isso manualmente no terminal</p>
            </section>
            <section className="beneficio">
                <h2>Aumentou a produtividade</h2>
                <p>Com tudo num só lugar, os desenvolvedores passaram a codar, testar e corrigir erros mais rápido. <br />Automatizou muitos processos que antes eram manuais.</p>
            </section>
            <section className="beneficio">
                <h2>Deu suporte a times grandes com controle de versão, testes e deploy integrados</h2>
                <p>Ele trouxe recursos pra integração com sistemas de versionamento (como o Git), permitindo que vários devs trabalhem juntos num mesmo projeto com organização e segurança. <br />Se consolidou como IDE confiável pra desenvolver projetos grandes, como o próprio sistema operacional Windows, jogos com Unity, soluções empresariais com C#, e até serviços em nuvem (Azure).</p>
            </section>
        </div>

        {/* Exemplos */}
        
        <div className="container-3">
            <header id="h-3">
                <h1>exemplos de uso na Microsoft</h1>
                <p>O Visual Studio não é só uma ferramenta feita pela Microsoft — ele também é uma das principais ferramentas que a própria Microsoft usa todos os dias pra construir os produtos e serviços que a gente usa no mundo todo. <br /><br /></p>
            </header>
            <section className="tema">
                <h2>A própria Microsoft usa o Visual Studio internamente para desenvolver Windows, Office, Edge, Azure services, e até projetos de IA.

</h2>
            </section>
            <section className="tema">
                <h2>O Visual Studio é a casa oficial do .NET, um dos maiores frameworks de desenvolvimento do mundo.</h2>
            </section>
            <section className="tema">
                <h2>Muitos serviços do Microsoft Azure são criados e mantidos com Visual Studio. <br /><br />
                Dentre vários outros usos

</h2>
            </section>
        </div>
      </div>
    </>
  );
}

export default Content;