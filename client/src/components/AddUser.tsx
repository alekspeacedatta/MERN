import { useState } from "react";
import { useaddUser } from "../customHooks/useAddUser"


const AddUser = () => {
    const [ name, setName ] = useState('')
    const [ age, setage ] = useState('')

    const { mutate: addUser } = useaddUser();

    return (
        <form onSubmit={(e) => { e.preventDefault(); addUser({name, age}) }}> 
            <section>
                <label htmlFor="">Name: </label>
                <input type="text" placeholder="enter your name"  onChange={(e) => {setName(e.target.value)}}/>
            </section>
            <section>
                <label htmlFor="">Age: </label>
                <input type="number" placeholder="enter your age" onChange={(e) => {setage(e.target.value)}} />
            </section>
            <button type="submit">Add User</button>
        </form>
    )
}
export default AddUser