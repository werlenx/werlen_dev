
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
            <p>Olá, me chamo Werlen Araujo dos Santos. Seja bem-vindo!</p>
            <p>
              Sou natural de Moju-PA e estou me formando em Sistemas de Informação na UNIFESSPA. Atualmente, sou professor de informática no IFP e trabalho com projetos de design, desenvolvimento web e web3.
              </p>
            <p>
            Um pouco da minha historia se passa na cidade onde nasci com um emprego de meio periodo em uma lanhouse e um servidor que rodava um GTA IV com os modes personalizados. Essa experiência inicial não apenas despertou meu interesse pelos sistemas, mas também pude aprender bastate sobre conceitos e ferramentas de design como photoshop, coreldraw entre outros que facilitaram minha experiencia na construção de sites consistentes e com personalidade do ponto de vista do design.
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
