import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
}
from 'react-router-dom'
import LoginPage from "./pages/loginPage"
import HomePage from "./pages/homePage"
import { AuthProvider, AuthContext } from "./contexts/auth"
import { Props } from "./interfaces/IProps"
import { useContext } from "react"


const AppRouter = () => {

    const Private = ({ children }: Props):any =>{
        const { authenticated, loading } = useContext(AuthContext)

        if(loading){
            return <div><h1>Carregando</h1></div>
        }

        if(!authenticated){
            return <Navigate to="/" />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                <Route path="/" element={<LoginPage/>}/> 
                <Route path="/sistema" element={<Private><HomePage/></Private>}/> 
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRouter