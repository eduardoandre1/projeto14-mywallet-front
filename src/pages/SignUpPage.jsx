import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import axios from "axios"
import { useState } from "react";
export default function SignUpPage() {
  const [email,setemail] = useState("")
  const [nome,setnome] =useState('')
  const [senha,Setsenha] =useState('')
  const [confirm,Setconfirm] =useState('')
  function  sendUser(){
    

  }
  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />
        <input placeholder="Nome" type="text" 
        onChange={(event)=>setnome(event.target.value)}/>
        <input placeholder="E-mail" type="email" 
        onChange={(event)=>setemail(event.target.value)}/>
        <input placeholder="Senha" type="password" autocomplete="new-password" 
        onChange={(event)=>Setsenha(event.target.value)}/>
        <input placeholder="Confirme a senha" type="password" autocomplete="new-password" 
        onChange={(event)=>Setconfirm(event.target.value)}/>
        <button onClick={sendUser}>Cadastrar</button>
      </form>

      <Link>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
