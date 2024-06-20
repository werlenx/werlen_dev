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
        background-color: #383838;
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
            /* width: 50%; */
            
            .social-icons{
                color: #e8e8e8;
                background-color: #d4d4d4;
                display: flex;
                flex-direction: column;
                width: 30vw;

                gap: 2px;
                padding: 15px;
                
                a{  
                    margin-left: 98%;
                    width: 20%;
                    text-decoration: none;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    img{
                        padding: 5px;
                        width: 20px;
                        height: 20px;
                    }
                }
                a:visited {
                    color: #e8e8e8;
                    text-decoration: none;
}
            }
        }
    }
`
export {FooterStyle}