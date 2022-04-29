import React, {useState, useContext } from "react"
import { Container, Form } from "./style"

import { AuthContext } from "../../contexts/auth"

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext)

    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')

    const handleSubmit = (event: React.ChangeEvent<SubmitEventInit>): void => {
        event.preventDefault()

        login(email, password) //integração com o meu contexto
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Sign-in</h1>
                <input type="text" id="email" name="email" placeholder="email" value={email as string}  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="Password" value={password as string} onChange={(e) => setPassword(e.target.value)}/> 
                <button>Entrar</button>
            </Form>
        </Container>
    )
}

export default LoginPage