import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: apiClient.getAll.bind(apiClient), // this
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
