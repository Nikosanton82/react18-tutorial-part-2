import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
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
