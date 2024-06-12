
import styled from 'styled-components';

const NavBar = styled.nav`
    grid-area: nav;
    width: 100vw;
    
    display: flex;
    flex-direction: column;

    .banner{
        background-color: #464646;
        padding: 20px 100px;
        display: flex;
        flex-direction: row;
        height: 10vw;
    img{
        display: flex;
        height: 100%;

        position: inherit;
        
    }
    .title{
        padding-left: 4vw;
    }
    }
    width: 100vw;
    display: flex;
    flex-direction: column;
    p{
        padding: 0;
        margin: auto;
        width: 100%;
    }
    .menu{
        
        padding: 10px;
        display: flex;
        flex-direction: row;
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

    }
    a{
        background-color: #CCCCCC;
        color: #202020;
        font-size: 2rem;
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

`

export { NavBar };