import styled from 'styled-components';

export const Container = styled.div`  
  margin: 30px;   
  display: flex;
  flex-direction: row;  

  img {
    max-width: 800px;
    height: 500px;
  }

  div {
    display: flex;       
    flex-direction: column;
    margin-left: 30px;
    margin-top: 100px;

    strong {
      font-size: 26px;
      font-weight: bold;
    }

    p { 
      font-size: 18px;
    }
  }
`;


export const Logo = styled.img`
  width: 150px;
  height:80px ;  
  object-fit: cover;
  width: 100%;
  height: 100%;  
`;