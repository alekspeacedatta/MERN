import { useState } from "react"
import { useLogin } from "../customHooks/useLogin"

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [message, setMessage] = useState<{ text: string, color: string } | null>(null);

    const { mutate: login } = useLogin({
        onSuccess: () => {
            setMessage({ text: 'Login successful ✅', color: 'green' });
        },
        onError: () => {
            setMessage({ text: 'Login failed ❌', color: 'red' });
        },
    }); 

    const handleLogin = (e : any) => {
        e.preventDefault();
        login({ email, password });
        setEmail('');
        setPassword('');
    }
    return (
        <form onSubmit={handleLogin}>
            {message && <p style={{ color: message.color }}>{message.text}</p>}
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