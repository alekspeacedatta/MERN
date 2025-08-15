import { useUser } from "../customHooks/useUser";
import ProfileCart from "./ProfileCart";
const User = () => {
  const { data: user, isError, isLoading, error } = useUser();

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: {error.message} </p>;

  return (
    <div className="user-section">
      <div className="user-content">
        <section>
          <h2>User name: {user.name}</h2>
          <h2>User email: {user.email}</h2>
        </section>
        <ProfileCart endpoint="/user-product" />
      </div>
    </div>
  );
};
export default User;
