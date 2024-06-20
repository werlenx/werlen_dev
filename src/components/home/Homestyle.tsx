import styled from "styled-components";

const HomeStyle = styled.div`
    
    color: #202020;
    grid-area: outlet;
    grid-column-start: 1;
    grid-column-end: 7;
    box-sizing: border-box;
    margin: 40px 0;

    .design-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 40vh;
        object-fit: cover;
        align-items: center;
        /* border: 1px solid blue; */
        overflow: hidden;
        margin-bottom: 20px;
        .design-text{
            
            padding: 0 40px;
            h2{
                /* background-color: green; */
                font-size: 3rem;
            }
            h4{
                /* background-color: blue; */
                font-size: 2rem;
            }
            p{
                /* background-color: yellow; */
                font-size: 1.5rem;
                text-align: justify;
            }
        }
        img{
            height: 100%;
        }
    }
    .work-card-container{
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: space-around;
        background-color: blue;
        .work-card{
            background-color: red;
            width: 30vh;
            padding: 20px;
            
        }
        img{
            height: 100%;
            width: 100%;

            
        }

    }
`

export {HomeStyle};