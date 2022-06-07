import { useState } from "react"
type AuthUser = {
    name: string
    email: string
}
const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null);
    const handleLogin = () => {
        setUser({
            name: 'Jayesh',
            email: 'jayesh@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is{user?.name}</div>
            <div>Email is {user?.email}</div>
        </div>
    )
}