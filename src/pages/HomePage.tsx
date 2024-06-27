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
                    <div className="image">
                        <img src="./home_img/original-ce49.jpg" alt="" />
                    </div>
                </div>
                <div className="design-card">
                    <div className="image">
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
                <div className="web-pages">
                    <h2>Nossos serviços</h2>
                    <div className="work-card-container">
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <h4>Landing Pages</h4>
                            <p>
                                Maximize suas conversões com landing pages customizadas. Focadas em resultados, 
                                nossas páginas são projetadas para capturar a atenção e impulsionar vendas.
                            </p>
                        </div>
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <h4>Aplicações web</h4>
                            <p>
                            desempenho superior, segurança robusta e experiência de usuário excepcional. 
                            Aproveite funcionalidades avançadas e suporte técnico dedicado para impulsionar seu crescimento de forma otimizada e segura.
                            </p>
                        </div>
                        <div className="work-card">
                            <img src="landingPage_ico.svg" alt="" />
                            <h4>E-comerce</h4>
                            <p>
                            Conveniência 24/7, ampla variedade de produtos, experiência personalizada, redução de custos, 
                            expansão de mercado global e análise de dados para melhorias contínuas. 
                            Transforme sua estratégia de vendas com agilidade e eficiência digital.
                            </p>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </HomeStyle>
    )
}