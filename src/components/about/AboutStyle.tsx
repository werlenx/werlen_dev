
import styled from "styled-components";

const AboutStyle = styled.div`
  color: black;
  font-size: 1.5em;
  text-align: justify;
  display: flex;
  flex-direction: column;
  margin: 40px;
  width: 80vw;
  grid-area: outlet;
  grid-column-start: 1;
  grid-column-end: 6;
  box-sizing: border-box;

  .container {
    /* padding: 0 40px 0 40px; */
    /* border: 1px solid #ccc; */
  }
  .about-container{

    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }

  .description-about{
    text-align: justify;

    margin: 0;
    padding-left: 20px;
  }

  

  .sobre-min-card{

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    width: 16vw;
    /* height: 40vh; */
    padding: 0 20px;
    h2{
      
    }
    .profile-img {
      /* width: 200px; */
      /* height: 200px; */
      border-radius: 50%;
      /* margin: 40px; */
    }
  }
  hr{
    margin: 40px 0 40px 0;
  }
`;

export { AboutStyle };