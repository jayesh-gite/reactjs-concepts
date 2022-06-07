import { useContext } from "react"
import { UserContext } from './UserContext'

export const User = () => {

    const usercontext = useContext(UserContext);
    const handleLogin = () => {
        if (usercontext) {
            usercontext.setUser({
                name: 'jayesh',
                email: 'jayesh@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if (usercontext) {
            usercontext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is{usercontext?.user?.name}</div>
            <div>Email is {usercontext?.user?.email}</div>
        </div>
    )
};