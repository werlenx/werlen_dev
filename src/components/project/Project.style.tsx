import styled from "styled-components"

const ProjectStyle = styled.div`
    display: flex;
    flex-direction: row;
   
    padding: 40px 0;
    grid-area: outlet;
    grid-column-start: 2;
    grid-column-end: 6;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


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
        display: flex;
        flex-direction: row;
        gap: 10px;
        transition: transform 0.3s ease, box-shadow 0.5s ease;
        div{
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
        }

    }
    .item_2{
        background-color: #1b0a0a;
        width: 20vw;
        
        
    }
    .item_3{
        width: 10vw;
        align-items: last baseline;
        display: flex;
        flex-direction: column;
        gap: 10px;        
    }
    .item_4{
        background-color: #4b4d4a;
        /* height: 100%; */
    }
    .item_4:hover{
        transform: scale(1.05); 
        cursor: pointer; 
    }
    .item_2:hover{
        transform: scale(1.05); 
        cursor: pointer; 
    }
`

export {ProjectStyle}