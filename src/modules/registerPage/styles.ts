import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');


export const RegisterConteiner = styled.div`
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;  
    display: flex;

`
export const ImageContent = styled.img`
 display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    height: 30%;

`
export const Title = styled.h1`
color: #ffffff;
align-items: center;
justify-content: center;
font-size: 2rem;
font-family: 'Montserrat', sans-serif;
text-shadow: 0.1em 0.1em 0.2em black;
padding-bottom:2rem;
`
export const HalfScreen = styled.div`
width: 50%;
background-color: #E3EAFD;
align-items: center;
`
export const FormContainer = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
    label{
        color: #ffffff;

        font-family: 'Montserrat';
        font-style: italic;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        text-shadow: 0.1em 0.1em 0.2em black;
        padding: 0.5rem;
    }
    input{
        padding: 0  3rem;
        border: 1px solid #E3EAFD;
        outline: none;
        height: 2rem;
        border-radius: 0.245rem;
        width: 100%;
        
        & + input{
            margin-top: 2rem;
        }
        
    
    }
    button[type="submit"]{
            justify-content: center;
          background-color:#4042E2;
          margin: 2rem;
          padding: 0 2rem;
          border-radius: 1rem;
          border: 0;
          height: 2rem;
          color:#ffffff;
          font-family: 'Montserrat';
          width: 30%;
      }  
`
export const WhiteScreen = styled.div`
justify-content: center;
align-items: center;
width: 50%;
display: flex;
`
export const ImageRight = styled.img`
justify-content: center;
align-items: center;
display:inline-block;
width: 730px;
height: 730px;
`


