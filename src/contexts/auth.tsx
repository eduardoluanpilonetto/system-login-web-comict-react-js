import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Props } from "../interfaces/IProps"
import { IUser } from "../interfaces/IUser"
import { api, createSession } from "../services/login"


export const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: Props) => {
        
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const navigate = useNavigate()

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
            
            const reveredToken = localStorage.getItem('token')

            if(reveredToken){
                api.defaults.headers.common['Authorization'] = `Bearer ${reveredToken}`
            }else{
                logout()
            }
        }

        setLoading(false)
    }, [])

    const login = async (email: string, password: string) => {


        createSession(email, password).then((response) => {
            if(response.status === 200){
                const loggedUser = {
                    id: response.data.user.id,
                    name: response.data.user.name,
                    email: response.data.user.email
                }
        
                const token = response.data.token
        
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
                localStorage.setItem('user', JSON.stringify(loggedUser));
        
                localStorage.setItem('token', token)
    
                setUser(loggedUser)
    
                navigate('/sistema')
            }
        }).catch(err => console.log(err))
    }

    const logout = () => {
        setUser(null)

        api.defaults.headers.common['Authorization'] = ''

        localStorage.removeItem('user')
        localStorage.removeItem('token')

        navigate('/')
    }
    return (


        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}