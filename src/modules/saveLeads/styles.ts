import styled from "styled-components";

export const Container = styled.div`
flex-direction: row;
    justify-content: space-evenly;

    display: flex;
    
`
export const Form = styled.div`
background-color:#0E056E ;
padding-top: 12rem;
display: table;
vertical-align: middle;
width: 30%;
padding-top: 10rem;
display: inline;
`
export const OpportunityTable = styled.table`
     border-collapse: separate; 
    border-spacing: 2rem;
    padding-right: 4rem;
     background:  #E3EAFD;
    border-radius: 10px;
   
  input[type=checkbox] {
         position: relative;
	       cursor: pointer;
    }
    input[type=checkbox]:before {
         content: "";
         display: block;
         position: absolute;
         width: 20px;
         height: 20px;
         top: 0;
         left: 0;
         background-color:#4042E2;
}
input[type=checkbox]:checked:before {
         content: "";
         display: block;
         position: absolute;
         width: 20px;
         height: 20px;
         top: 0;
         left: 0;
         background-color:#1E80EF;
}
    input[type=checkbox]:checked:after {
         content: "";
         display: block;
         width: 5px;
         height: 10px;
         border: solid white;
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 2px;
         left: 6px;
         

}
tr{/** Faz o estilo para as linhas. **/
   text-align: center; /** Centraliza o conteúdo. **/
}
`
export const TableContent = styled.div`
align-items: center;
display: inline-block;
justify-content: center;
`
export const TableContainer = styled.div`
padding-top: 15rem;
justify-content: center;
align-items: center;
width: 10%;
display: flex;
flex-direction: row;

`
export const Title = styled.h1`
color:#ffffff;
font-weight: bolder;
align-items: center;
justify-content: center;
font-size: 2rem;
font-family: 'Montserrat';
padding-bottom:4rem;
`
export const LeadButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: 5rem;

margin-left: -4rem;
background-color: #0E056E;
width: 10rem;
height: 3rem;
border-radius: 30px;
 color:#ffffff;
          font-family: 'Montserrat';
`