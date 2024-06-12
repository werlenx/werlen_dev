import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "nav nav nav nav nav nav"
        "outlet outlet outlet outlet outlet outlet"
        "footer footer footer footer footer footer";
    gap: 20px;
    
`
export {Grid}