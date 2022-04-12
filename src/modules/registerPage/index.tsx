import React, { useState } from "react";
import elogroupImage from '../../assets/elogroupImage.png'
import corporateImg from '../../assets/corporateImg.jpg'
import { RegisterConteiner, HalfScreen, WhiteScreen, FormContainer, Title, ImageContent, ImageRight } from './styles'
import { GlobalStyle } from "../../styles/global";
import validator from 'validator';
import { Link, Redirect } from "react-router-dom";


export default function RegisterPage() {

    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState('')

    const validate = (value: any) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong password')
        } else {
            setErrorMessage('Is not Strong password')
        }
    }


    function validatePass() {
        var password = document.getElementById("password")
        var confirm_password = document.getElementById("confirm_password");

        if (password !== confirm_password) {
            alert('Cadastrado');
        }
        else {
            alert('Insira duas senha iguas');
        }
    }
    const handleClick = (event: any) => {
        validatePass()
        const saveData = (key: string, value: string) => {
            localStorage.setItem(key, user)

        }
        <Link to="/leadsPanel"></Link>
        saveData('name', user)

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
                                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                                </label>
                                    <label>
                                        Senha*
                                        <input type="password" onChange={(e) => validate(e.target.value)} id="password" />
                                        <span>
                                            {errorMessage}
                                        </span>
                                    </label>
                                        <label>
                                            Confirme a senha*
                                            <input type="password" id="confirmPassword" />
                                        </label>
                        <button type="submit" onClick={handleClick}>   Cadastrar</button>
                    </FormContainer>
                </HalfScreen>
                <WhiteScreen>
                    <ImageRight src={corporateImg}/>
                </WhiteScreen>
            </RegisterConteiner>

        </>
    )
}