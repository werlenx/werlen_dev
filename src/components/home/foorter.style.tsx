import styled from 'styled-components';

const FooterStyle = styled.div `
    grid-area: footer;
    width: 100vw;
    height: 12vh;
    display: flex;
    flex-direction: column;
    background-color: #080707;
    .copy{
        text-align: center;
    }
    .info{
        background-color: #454545;
        width: 50%;
        
        display:flex;
        justify-content: center;
        align-items: center;

    }
    .container{

        span{
            font-family: Old English Text MT;;
        }
        background-color: burlywood;
        display: flex;
        flex-direction: row;
        p{
            text-align: center;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0;
        }
        .div2{
            width: 50%;
            
            .social-icons{
                background-color: #e3e3e3;
                display: flex;
                flex-direction: column;
                border: 1px solid black;
                gap: 2px;
                padding: 15px;
                a{
                    color: #080707;
                    width: 20%;
                    text-decoration: none;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    img{
                        padding: 5px;
                        width: 30px;
                        height: 30px;
                    }
                }
                a:visited {
                    color: #080707;
                    text-decoration: none;
}
            }
        }
    }
`
export {FooterStyle}