export const fetchProducts = async () => {
    try {
        const res = await fetch('http://localhost:3000');
        if(!res.ok) throw new Error("Fetch Users Res Is Not Ok");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const addProduct = async (name: string, price: number) => {
    try {
        const res = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
        const res = await fetch(`http://localhost:3000/${userID}`, {
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