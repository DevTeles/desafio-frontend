import styled from 'styled-components';

export const Container = styled.ul`  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  list-style: none; 

  li {   
    box-sizing: border-box;
    overflow: hidden;
    max-width: 600px;
    div {
      background: #393939;  
      color: #FFF;    
    }
    
    img {      
      width: 600px;
      height: 400px;
      display: block;
      transition: transform ease 0.3s;
      &:hover {        
        transform: scale(1.1);
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    place-content: center;
    justify-content: center;

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  }

  @media (max-width: 1600px) {    
    display: flex;
    flex-wrap: wrap;  
    gap: 6px;
    
    li {
      /* margin-right: 5px; */
    }
  }
`;
