
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "../carrousel/Carrousel";
import { AboutStyle } from "./AboutStyle";

export default function About() {

  return (
    <AboutStyle>
      <div className="container">
        <div className="about-container">
        <div className="sobre-min-card">
          <h2>
            <span>S</span>obre Mim
          </h2>
          <img className="profile-img" src="profile-pic.png" alt="Profile" />
        </div>

        <p className="description-about">
          <p>Olá, meu nome é Werlen Araujo dos Santos. Bem-vindo!</p>
          <p>
            Sou natural de Moju-PA e estou me formando em Sistemas de Informação na UNIFESSPA. Atualmente, sou professor de informática no IFP e trabalho com projetos de design, desenvolvimento web e web3.
            </p>
          <p>
            Meu segundo emprego foi em uma lan house, onde passei horas jogando GTA IV em um servidor local. Foi aí que minha paixão pela tecnologia nasceu. Essa experiência inicial não apenas despertou meu interesse pelos intricados sistemas por trás dos jogos, mas também revelou minha inclinação natural para o design. O que eu não sabia na época é como essa inclinação pelo design se integraria perfeitamente à minha crescente fascinação pela programação.
          </p>
          <p>
          Ao longo dos anos, desenvolvi afinidade com computadores e seu funcionamento interno. Essa jornada me levou a cursar Sistemas de Informação, onde tive o privilégio de encontrar mentores e amigos que enriqueceram minha formação e crescimento profissional.
          </p>
          

          
        </p>
        </div>
        <hr />
      </div>
      
      <Carrousel/>
      <Carrousel/>
    </AboutStyle>
  );
}
