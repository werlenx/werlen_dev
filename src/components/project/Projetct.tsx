import {ProjectStyle} from "./Project.style"

export default function Project(){
    return(
        <ProjectStyle>
            <div className="project-container">

                <div className="big-item">
                    <img src="01.PNG" alt="" />
                </div>

                <div className="Small-item-container">

                    <div className="Small-item">
                        <img src="02.PNG" alt="" />
                    </div>

                    <div className="Small-item" >
                        <img src="03.PNG" alt="" />
                    </div>

                </div>
            </div>
            <div className="info-project">
                <h2>RepSys</h2>
                <p>Tipo do projeto: Aplicação Web</p>
                <p>Tecnologias: React, MySQL</p>
                <p>Descrição: Este projeto visa atender o a demanda de um software para controle de turma e gerencia de times a descrição mais completa você pode ler <a target="blank" href="./TermoDeAberturaRepSys.pdf">aqui</a></p>
            </div>
        </ProjectStyle>
    )
}