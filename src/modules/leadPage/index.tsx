import React from "react";
import { GlobalStyle } from "../../styles/global";
import { Title,LeadsTable } from "./styles";


export default function LeadsPage(){
return(
    <GlobalStyle>
    <Title>
        Painel de Leads
    </Title>
    <LeadsTable/>
    </GlobalStyle>
)
}