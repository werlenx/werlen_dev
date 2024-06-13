import {ProjectStyle} from "./Project.style"

export default function Project(){
    return(
        <ProjectStyle>
            <div className="item_1">
                <div className="item_2">
                    <img src="projeto01/01.PNG" alt="" />
                </div>
                <div className="item_3">
                    <div className="item_4">
                        <img src="projeto01/02.PNG" alt="" />
                    </div>
                    <div className="item_4" >
                        <img src="projeto01/03.PNG" alt="" />
                    </div>
                </div>
            </div>
            <div className="info-projetc">
                <h2>Título do projeto</h2>
                <p>Tipo do projeto:</p>
                <p>Tecnologias: </p>
                <p>Metodologia: </p>
            </div>
        </ProjectStyle>
    )
}