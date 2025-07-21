import { fetchUsers } from "../apiCalls";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    })
}