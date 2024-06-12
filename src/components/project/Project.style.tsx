import styled from "styled-components"

const ProjectStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    padding: 40px;
    .info-projetc{
        color: black;
        padding: 0 40px 0 40px;
    }
    h2{
        font-size: 2.5em;
        padding: 0;
        margin: 0;
    }
    .item_1{
        height: 40vh;
        display: flex;
        flex-direction: row;
    }
    .item_2{
        background-color: #1b0a0a;
        height: 100%;
        width: 20vw;
        
    }
    .item_3{
        height: 50%;
        width: 10vw;
    }
    .item_4{
        background-color: #4b4d4a;
        height: 100%;
    }
`

export {ProjectStyle}