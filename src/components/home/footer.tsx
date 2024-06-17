import {FooterStyle} from  './foorter.style'

export default function Footer(){
    return(
        <FooterStyle>
            <div className='copy'>
                &copy; Copyright 
            </div>
            <div className='container'>

                <div className='social div2'>
                    <div className="social-icons">
                        <a href="https://wa.me/91985055247" target="_blank" rel="noopener noreferrer"><img src='whatsapp.png'/><span>W</span>hatsapp</a>
                        <a href="https://github.com/werlenx" target="_blank" rel="noopener noreferrer"><img src='github.png'/><span>G</span>ithub</a>
                        <a href="https://linkedin.com/in/werlen-araujo" target="_blank" rel="noopener noreferrer"><img src='linkedin.png'/><span>L</span>inkedin</a>
                        <a href="https://instagram.com/werlenx" target="_blank" rel="noopener noreferrer"><img src='instagram.png'/><span>I</span>nstagram</a>
                    </div>
                </div>
            </div>
            
        </FooterStyle>
    )
}