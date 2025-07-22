import { useState } from "react"
import { useLogin } from "../customHooks/useLogin"

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [message, setMessage] = useState<{ text: string, color: string } | null>(null);
    const [ token, setToken ] = useState<string | null>('');

    const { mutate: login, data: backMessage } = useLogin({
        onSuccess: () => {
            setMessage({ text: 'Login successful ', color: 'green' });
            setInterval(() => {
                setMessage(null);
            }, 1000)
        },
        onError: ( error: any ) => {
            setMessage({ text: error.message || 'login failed', color: 'red' });
            setInterval(() => {
                setMessage(null);
            }, 3000)
        },
    }); 

    const handleLogin = (e : any) => {
        e.preventDefault();
        login({ email, password });
        setEmail('');
        setPassword('');
        const token = localStorage.getItem('token');
        setToken(token);
    }
    return (
        <form onSubmit={handleLogin}>
            {message && <p style={{ color: message.color }}>{message.text}</p>}
            {backMessage?.message}
            {token}
            <section>
                <label htmlFor="">Email: </label>
                <input type="text" value={email} placeholder="enter your email" onChange={(e) => { setEmail(e.target.value) }} />
            </section>
            <section>
                <label htmlFor="">Password: </label>
                <input type="text" value={password} placeholder="enter your password" onChange={(e) => { setPassword(e.target.value) }} />
            </section>
            <button type="submit">Login</button>
        </form>
    )
}
export default Login