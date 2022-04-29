import { Content, Conteiner } from "./style"
import { useContext } from "react"
import { AuthContext } from "../../../contexts/auth"

export function Header(){
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return (
        <Conteiner>
            <Content>
                <h1>WebComics<span>.</span></h1>
                <button onClick={logout}>Sair</button>
            </Content>
        </Conteiner>

    )
}