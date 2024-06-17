import {NavBar} from './navbar.style';
import { Link } from 'react-router-dom';
export default function Nav(){
    return(
        <NavBar>
            <div className='banner'>
                <img src="logo.png" alt="" />
                <div className='title'>
                    <h1>Werlen Araujo dos Santos</h1>
                    <p>
                        Desenvolverdor web e web3
                    </p>
                </div>
            </div>

            
            <div className='menu'>
                <ul>
                    <li>
                        <Link to="/"><span>H</span>ome</Link>
                    </li>
                    <li>
                        <Link to="/About"><span>S</span>obre</Link>
                    </li>
                    <li>
                        <Link to="/Projects"><span>P</span>rojetos</Link>
                    </li>
                    <li>
                        <Link to="/Contact"><span>C</span>ontato</Link>
                    </li>
                    
                </ul>
            </div>

        </NavBar>
    )
}