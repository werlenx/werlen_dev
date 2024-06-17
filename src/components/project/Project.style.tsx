import styled from "styled-components"

const ProjectStyle = styled.div`
    display: flex;
    flex-direction: row;
    grid-area: outlet;
    grid-column-start: 1;
    grid-column-end: 7;
    padding: 0 40px;
    height: 30vw;
 
    
    .info-project{
        color: black;
        padding: 0 40px 0 40px;
        h2{
            font-size: 2.5em;
            padding: 0;
            margin: 0;
        }
    }
    
    .project-container{
        display: flex;
        flex-direction: row;
        width: 60vw;
        gap: 10px;
        img{
            transition: all 1.1s;
            min-width: 100%;
            min-height: 100%;
        }

    }
    .big-item{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    }
    .big-item:hover img{
        transform: scale(1.2);
        justify-content: center;
        align-items: center;

    }
    .Small-item-container{
        gap: 10px;
        display: flex;
        flex-direction: column;
        
    }
    .Small-item{
        justify-content: center;
        align-items: center;
        width: 20vw;
        height: 50%;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    }
    .Small-item:hover img{
        transform: scale(1.1);
    }
    .Small-item:hover{
        background-size: 150%; 
        cursor: pointer; 
    }
    .big-item:hover{
        background-size: 150%; 
        cursor: pointer; 
    }
`

export {ProjectStyle}