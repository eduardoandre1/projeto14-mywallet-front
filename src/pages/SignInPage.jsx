import styled from "styled-components"
import { Link } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"

export default function SignInPage() {
  const [email,SetEmail] = useState("")
  const [password,SetPassword] = useState("")
  return (
    <SingInContainer>
      <form>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" 
        onChange={(event)=>SetEmail(event.target.value)}/>
        <input placeholder="Senha" type="password" autocomplete="new-password" 
        onChange={(event)=>SetPassword(event.target.value)}/>
        <button>Entrar</button>
      </form>

      <Link>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
