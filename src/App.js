import './App.scss';
import Design from "./assets/images/design-icon.png";
import Communication from "./assets/images/comm-icon.png";
import Presentation from "./assets/images/pres-icon.png";
import Responsive from "./assets/images/resp-icon.png";
import Website from "./assets/images/web-icon.png";
import UxDesign from "./assets/images/ux-icon.png";
import prj1 from "./assets/images/Projetos/prj1.png";
import prj2 from "./assets/images/Projetos/prj2.png";
import prj3 from "./assets/images/Projetos/prj3.png";
import prj4 from "./assets/images/Projetos/prj4.png";
import { CgCopy, CgMail, CgTime, CgWebsite } from "react-icons/cg";

function App() {
  return (
    <div className="page">
      <div className="intro">
        <div className="container">
          <div className="header" id="inicio">
            <div className="logo">
              <p>
                <span className="bracket">
                  {"{ "}
                </span>
              Gustavo<span className="color">Barbosa</span>
                <span className="bracket">
                  {" }"}
                </span>
              </p>
            </div>
            <div className="menu">
              <a href="#inicio">Início</a>
              <a href="#trabalho">Meu trabalho</a>
              <a href="#habilidades">Habilidades</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
          <div className="intro-text">
            <h1>Comece a<br />vender na internet</h1>
            <p>Se o seu cliente usar a internet para procurar informações sobre produtos e serviços, ele terá milhares de propostas, recomendações, especialistas e opiniões disponíveis.<br /><br /><b>Garanta seu lugar de destaque!</b></p>
          </div>
        </div>
      </div>
      <div id="trabalho" className="trabalho">
        <div className="container">
          <h2><span>—&nbsp;&nbsp;</span> Meu trabalho <span>&nbsp;&nbsp;—</span></h2>
          <h3>Em que posso te ajudar</h3>
          <div className="three-block">
            <div className="block">
              <img src={Design} alt="Design" />
              <h4>Design</h4>
              <p>O design que seu site precisa para atingir os melhores resultados com seus clientes.</p>
            </div>
            <div className="block">
              <img src={Communication} alt="Comunicação" />
              <h4>Comunicação</h4>
              <p>Trabalho a comunicação com você para que você possa se comunicar com seus compradores.</p>
            </div>
            <div className="block">
              <img src={Presentation} alt="Apresentação" />
              <h4>Apresentação</h4>
              <p>Sua imagem marcante para que seus clientes se lembrem de você sempre que precisarem.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="habilidades" id="habilidades">
        <div className="container">
          <h2><span>—&nbsp;&nbsp;</span> Habilidades <span>&nbsp;&nbsp;—</span></h2>
          <h3>O que aprendi ao longo dos anos</h3>
          <div className="skills">
            <div className="skill">
              <div className="header">
                <h4>Javascript</h4>
                <p>80%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>Wordpress</h4>
                <p>90%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>React</h4>
                <p>75%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>WooCommerce</h4>
                <p>85%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>Laravel</h4>
                <p>70%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>CodeIgniter</h4>
                <p>90%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>AdonisJS</h4>
                <p>60%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>Photoshop</h4>
                <p>50%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>Apps - Android</h4>
                <p>65%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="header">
                <h4>OpenCart</h4>
                <p>75%</p>
              </div>
              <div className="progression-bar">
                <div className="progression" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="servicos" className="trabalho servicos">
        <div className="container">
          <h2><span>—&nbsp;&nbsp;</span> Alguns serviços <span>&nbsp;&nbsp;—</span></h2>
          <h3>Mais algumas coisas que posso fazer</h3>
          <div className="three-block">
            <div className="block">
              <img src={Responsive} alt="Aplicativos" />
              <h4>Aplicativos</h4>
              <p>Desenvolvimento de aplicativos para Android e iOS utilizando Ionic e Flutter.</p>
            </div>
            <div className="block">
              <img src={Website} alt="Websites" />
              <h4>Websites</h4>
              <p>Seu cartão de visitas na internet, onde seus clientes vão te encontrar e descobrir tudo que você pode fazer por eles.</p>
            </div>
            <div className="block">
              <img src={UxDesign} alt="Ux/Ui Design" />
              <h4>UI/UX Design</h4>
              <p>Design planejado de forma que seus clientes tenham facilidade em encontrar o que procuram.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="projetos" className="projetos">
        <div className="container">
          <h2><span>—&nbsp;&nbsp;</span> O que já fiz <span>&nbsp;&nbsp;—</span></h2>
          <h3>Alguns dos meus projetos</h3>
          <div className="lista-projetos">
            <div className="projeto">
              <img src={prj1} alt="Sobel Suprema" />
              <div className="descricao">
                <h4>Sobel Suprema</h4>
                <p>O projeto <a href="https://sobelsuprema.com.br/" target="_blank" rel="noreferrer">Sobel Suprema</a> foi feito em parceria com a empresa <a href="https://www.quattromani.com.br/" target="_blank" rel="noreferrer">Quattromani Digital</a>, com design de <b>Cristian Romanelli</b>, onde utilizei tecnologia PHP + MVC para desenvolver um website que trouxesse as informações da empresa em três idiomas, assim como o catálogo e arquivos de mídia para divulgação de produtos para seus revendedores.</p>
              </div>
            </div>
            <div className="projeto">
              <div className="descricao">
                <h4>DIV360</h4>
                <p>Um website de rolagem horizontal desenvolvido como uma <b>landing page</b> para a empresa <a href="http://www.divpropaganda.com.br/div360" target="_blank" rel="noreferrer">DIV Propaganda</a>, com design de <b>Alexandre Preto</b>, que busca ser um cartão de visitas digital da agência, onde o visitante pode visualizar alguns trabalhos desenvolvidos para alguns clientes da empresa.</p>
              </div>
              <img src={prj2} alt="DIV360" />
            </div>
            <div className="projeto">
              <img src={prj3} alt="VDetalhes" />
              <div className="descricao">
                <h4>VDetalhes</h4>
                <p>Uma <a href="https://store.vdetalhes.com.br/" target="_blank" rel="noreferrer">loja virtual</a> desenvolvida em parceria com a empresa <a href="http://www.divpropaganda.com.br/div360" target="_blank" rel="noreferrer">DIV Propaganda</a>, com design de <b>Alexandre Preto</b>, utilizando tecnologia <b>OpenCart</b> integrada aos sistemas dos <b>correios e pagseguro</b> para que o visitante tenha à disposição as informações sobre os produtos, fretes e pagamentos disponibilizados pela empresa.</p>
              </div>
            </div>
            <div className="projeto">
              <div className="descricao">
                <h4>Golden Invest</h4>
                <p>Desenvolvido para a empresa <a href="https://goldeninvest.com.br/" target="_blank" rel="noreferrer">Golden Invest</a> através da <a href="https://agenciawebsoft.com.br/" target="_blank" rel="noreferrer">Agência Websoft</a>, o website busca informar ao visitante os benefícios dos produtos e serviços, tirando dúvidas e reforçando a segurança sobre a imagem da empresa.</p>
              </div>
              <img src={prj4} alt="Golden Invest" />
            </div>
          </div>
        </div>
      </div>
      <div id="contato" className="contato">
        <div className="container">
          <div className="info">
            <h2><span>—&nbsp;&nbsp;</span> Vamos conversar?</h2>
            <h3>Entre em contato</h3>
            <p><CgMail /> <a href="mailto:gustavo@agenciawebsoft.com.br" target="_blank" rel="noreferrer">gustavo@agenciawebsoft.com.br</a></p>
            <p><CgWebsite /> <a href="https://agenciawebsoft.com.br" target="_blank" rel="noreferrer">agenciawebsoft.com.br</a></p>
            <p><CgCopy /> <a href="https://agenciawebsoft.com.br/fale-conosco/" target="_blank" rel="noreferrer">Formulário para contato</a></p>
            <p><CgTime /> 10:00 - 18:00 (Horário de Brasília)</p>
          </div>
          <div className="image"></div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="logo">
            <p>
              <span className="bracket">
                {"{ "}
              </span>
              Gustavo<span className="color">Barbosa</span>
              <span className="bracket">
                {" }"}
              </span>
            </p>
          </div>
          <p className="desc">Se o seu cliente usar a internet para procurar informações sobre produtos e serviços, ele terá milhares de propostas, recomendações, especialistas e opiniões disponíveis.<br /><br /><b>Garanta seu lugar de destaque!</b></p>
        </div>
      </div>
      <div className="copy">
        Copyright © {(new Date().getFullYear())} | Todos os direitos reservados
      </div>
    </div>
  );
}

export default App;
