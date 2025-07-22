export const fetchProducts = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/product', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if(!res.ok) throw new Error("Fetch Users Res Is Not Ok");
        const data = await res.json();
        return data.products;
    } catch (error) {
        console.error(error);
    }
}
export const addProduct = async (name: string, price: number) => {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                price: price
            })
        })
        if(!res.ok) throw new Error("Error Add User Res Is Not Ok");
        
    } catch (error) {
        console.error(error);
    }
}
export const deleteProduct = async (userID: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/product/${userID}`, {
            method: 'DELETE',
        })
        if(!res.ok) throw new Error("Error: Delete User Res Is Not Ok");
    } catch (error) {
        console.error(error);
    }
}
export const fetchMessage = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/data');
        if(!res.ok) throw new Error("Error: Fetch Message Res Is Not Ok");
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const register = async (name: string, email: string, password: string) => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        if(!res.ok) throw new Error("Register Res Is Not Ok");
        const data = await res.json();
        localStorage.setItem('token', data.token);
    } catch (error) {
        console.error(error);
    }
}
export const login = async (email: string, password: string ) => {
    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await res.json();
        if(!res.ok) throw new Error( data.message || "Error: Login Res Is Not Ok");
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}