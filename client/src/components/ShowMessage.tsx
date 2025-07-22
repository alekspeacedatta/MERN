import { useMessage } from "../customHooks/useMessage";

const ShowMessage = () => {
  const { data: message, isLoading, error } = useMessage();

  if (isLoading) return <p>Loading for message...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h2>{message.message}</h2>
      <p>message ID: {message.id}</p>
    </div>
  );
};
export default ShowMessage;
