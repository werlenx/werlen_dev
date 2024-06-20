import { HomeStyle } from "../components/home/Homestyle"

export default function HomePage(){
    return(
        <HomeStyle> 
            <div>
                <div className="design-card">
                    <div className="design-text">
                        <h2>Design</h2>
                        <h4>  Transformamos visões em realidade</h4>
                        <p>
                            interfaces intuitivas e visuais deslumbrantes que elevam a experiência do usuário.
                            Combinanmos estética e funcionalidade para entregar soluções de design personalizadas que atendem às suas necessidades e superam suas expectativas.
                        </p>
                    </div>
                    <div>
                        <img src="./home_img/original-ce49.jpg" alt="" />
                    </div>
                </div>
                <div className="design-card">
                <div>
                        <img src="./home_img/original-4b.jpg" alt="" />
                    </div>
                    <div className="design-text">
                        <h2>Design</h2>
                        <h4>  Transformamos visões em realidade</h4>
                        <p>
                            interfaces intuitivas e visuais deslumbrantes que elevam a experiência do usuário.
                            Combinanmos estética e funcionalidade para entregar soluções de design personalizadas que atendem às suas necessidades e superam suas expectativas.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Páginas web</h2>
                    <div className="work-card-container">
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem minus dolorem assumenda provident saepe nostrum tenetur, sit ea quaerat modi voluptates ratione. Veniam dicta ex optio voluptatem laboriosam magnam.
                            </p>
                        </div>
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem minus dolorem assumenda provident saepe nostrum tenetur, sit ea quaerat modi voluptates ratione. Veniam dicta ex optio voluptatem laboriosam magnam.
                            </p>
                        </div>
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem minus dolorem assumenda provident saepe nostrum tenetur, sit ea quaerat modi voluptates ratione. Veniam dicta ex optio voluptatem laboriosam magnam.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </HomeStyle>
    )
}