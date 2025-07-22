import { useQuery } from "@tanstack/react-query";
import { fetchMessage } from "../apiCalls";

export const useMessage = () => {
  return useQuery({
    queryKey: ["message"],
    queryFn: fetchMessage,
  });
};
