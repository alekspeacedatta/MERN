import { useDeleteUser } from "../customHooks/useDeleteUser";
import { useUsers } from "../customHooks/useUsers"

const ShowUsers = () => {
    
    const { data: users, isLoading, error } = useUsers();
    const { mutate: deleteUser } = useDeleteUser();

    if(isLoading) return <p>Loading for users...</p>
    if(error) return <p>return {error.message}</p>

    return (
        <div className="users-container">
            {users.user ? (
                <h2>hello</h2>
            ) : ( 
                <h2>there is no user</h2>
            )}
            {users.map((user : any) => (
                <div className="user" key={user._id}>
                    <h2>{user.name ? user.name : 'user not found'}</h2>
                    <p>{user.age}</p>
                    <button onClick={() => {deleteUser(user._id)}}>Delete User</button>
                </div>
            ))}
        </div>
    )
}
export default ShowUsers