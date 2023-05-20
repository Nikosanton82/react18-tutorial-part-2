import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = () => useQuery<Post[], Error>({
  queryKey: ['posts'],
  queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.data),
  staleTime: 1 * 60 * 1000 //1m
})

export default usePosts