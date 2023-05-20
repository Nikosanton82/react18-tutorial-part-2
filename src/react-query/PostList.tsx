import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, ssetUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) =>
          event.target.value === ""
            ? ssetUserId(undefined)
            : ssetUserId(parseInt(event.target.value))
        }
        value={userId || ""}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => console.log()}
      ></button>
    </>
  );
};

export default PostList;
