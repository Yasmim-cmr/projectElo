import React, { useState } from "react";
import { GlobalStyle } from "../../styles/global";
import { FormContainer } from "../registerPage/styles";
import { Container, TableContainer, Title, Form, OpportunityTable, LeadButton, TableContent } from "./styles";
export default function SaveLeads() {

const [lead, setLead] = useState('')
const [celPhone, setCelphone] = useState('')
const [email, setEmail] = useState('')

    function marcarTodos(marcar: any) {
        var itens = document.getElementsByName('check');

        if (marcar) {
            //@ts-ignore

        } else {
            //@ts-ignore
            document.getElementById('acao').innerHTML = 'Marcar Todos';
        }

        var i = 0;
        for (i = 0; i < itens.length; i++) {
            //@ts-ignore
            itens[i].checked = marcar;
        }

    }
  
    const handleClick = (event: any) => {
       
        const saveData = (key: string, value: string) => {
            localStorage.setItem(key, lead)
            localStorage.setItem(key, celPhone)
            localStorage.setItem(key, email)
        }
      
        saveData('Nome', lead)
        saveData('Celular', celPhone)
        saveData('Email', email)
 
    }
    return (
        <>
            <GlobalStyle />

            <Container>
                <Form>
                    <FormContainer>
                        <Title>
                            Novo Lead
                        </Title>
                        <label>
                            Nome*
                            <input type="text" value={lead} onChange={(e) => setLead(e.target.value)} />
                        </label>
                        <label>
                            Telefone*
                            <input type="text" value={celPhone} onChange={(e) => setCelphone(e.target.value)} />

                        </label>
                        <label>
                            E-mail*
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                    </FormContainer>
                </Form>
                <TableContent>
                    <TableContainer className="formulario">
                        <OpportunityTable>
                            <tr>


                                <th>
                                    <input type="checkbox" name="check" className="marcar" onClick={marcarTodos} />
                                    <span id="acao"></span> <br></br>
                                </th>
                                <th>Oportunidades</th>
                            </tr>

                            <tr>
                                <td><input type="checkbox" name="check"></input></td>
                                <td>RPA</td>
                            </tr>

                            <tr>
                                <td><input type="checkbox" name="check"></input></td>
                                <td>Produto Digital</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="check"></input></td>
                                <td>Analytics</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="check"></input></td>
                                <td>BPM</td>
                            </tr>
                        </OpportunityTable>

                    </TableContainer>
                    {/* //@ts-ignore */}
                    <LeadButton type="submit" onClick={handleClick}>
                        Salvar Lead
                    </LeadButton>
                </TableContent>

            </Container>



        </>
    )
}