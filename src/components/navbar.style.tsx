
import styled from 'styled-components';

const NavBar = styled.nav`
    grid-area: nav;
    display: flex;
    flex-direction: column;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .banner{
        background-color: #464646;
        padding: 20px 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 10vw;
        gap: 50px;
        img{
            display: flex;
            height: 100%;
            position: inherit;
            
        }
        .title{
            h1{ margin:0; font-size: 2rem;}
        }
        p{
            padding: 0;
            margin: auto;
            width: 100%;
        }
    }
    
    
    .menu{
        padding: 10px;
        display: flex;
        flex-direction: row;
        background-color: #202020;
        justify-content: flex-start;
        margin: 0;
    }
    ul{
        margin: 5px 20px 5px 20px;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
    }
    li{
        
        margin: 10px;
        text-align: center;
        background-color: green;

    }
    a{
        background-color: #CCCCCC;
        color: #202020;
        font-size: 1.5rem;
        text-decoration: none;
        padding: 10px;

    }
    a:hover{
        background-color: #808080;
    }
    span{
        font-family: Old English Text MT;
        font-size: 3.5;

    }

    @media (max-width: 480px){
        .banner{
            padding: 10px 50px;
            height: 10vw;
            img{
                display: flex;
                height: 100%;
                position: inherit;
                
            }
            .title{
                h1{ margin:0; font-size: 1rem;}
                p{ margin:0; font-size: 0.7rem;}
            }
        }
        .menu{
            padding: 5px;
        }

        li{
            margin: 10px;
            text-align: center;
            
        }
        a{
            font-size: 1rem;
        }
    }
    @media (max-width: 780px){

    }

`

export { NavBar };