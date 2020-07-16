import styled from 'styled-components';

export const Container = styled.div`  
  margin: 30px;   
  display: flex;
  flex-direction: row;  

  img {
    max-width: 800px;
    height: 520px;
    object-fit: cover;
  }

  form {
    display: flex;       
    flex-direction: column;
    margin-left: 30px;
    
    border: 3px solid #393939;
    width: 100%;

    h1 {
      text-align: center;
      background: #9999;
      margin-bottom: 15px;
    }    

    p { 
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      strong {
        font-size: 26px;
        font-weight: bold;
      }
    }

    input {      
      margin-right: 110px;
      padding-left: 10px;
      width: 500px;
      border-radius: 16px;

      &:focus {        
        border: 4px solid orange;        
      }
    }

    button {
      background: green;
      color: #FFF;
      font-size: 22px;
      font-weight: bold;
      height: 100px;
      margin-top: 120px;
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