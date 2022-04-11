import React, { useState } from "react";
import elogroupImage from '../../assets/elogroupImage.png'
import corporateImg from '../../assets/corporateImg.jpg'
import { RegisterConteiner, HalfScreen, WhiteScreen, FormContainer, Title, ImageContent, ImageRight } from './styles'
import { GlobalStyle } from "../../styles/global";
import validator from 'validator';

export default function RegisterPage() {

    const [errorMessage,setErrorMessage]= useState('')

    const validate = (value: any)=>{
        if(validator.isStrongPassword(value, {
            minLength:8,minLowercase:1,minUppercase:1, minNumbers:1,minSymbols:1
        })){
            setErrorMessage('Is Strong password')
        }else{
            setErrorMessage('Is not Strong password')
        }
    }
       

  function validarSenha()
  {
    var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password");   
          
      if (password !== confirm_password)
      {
          alert('senha iguais');
      }
      else
      {
            alert('senhas diferentes');
      }
  }

    return (
        <>
            <GlobalStyle />
            <RegisterConteiner>
                <HalfScreen>
                    <ImageContent src={elogroupImage}>
                    </ImageContent>
                    <FormContainer>
                        <Title>
                            Resgistre-se
                        </Title>
                        <label>
                            Usuário*
                            <input />
                        </label>
                        <label>
                            Senha*
                           
                             <input type="password" onChange={(e)=> validate(e.target.value) } id="password"/>
                            <span>
                                {errorMessage}
                            </span>
                        </label>
                        <label>
                            Confirme a senha*
                            <input type="password" id="confirmPassword" />
                        </label>

                        <button type="submit">
                            cadastrar
                        </button>
                    </FormContainer>
                </HalfScreen>

                <WhiteScreen>
                    <ImageRight src={corporateImg}>
                    </ImageRight>
                </WhiteScreen>
            </RegisterConteiner>

        </>
    )
}