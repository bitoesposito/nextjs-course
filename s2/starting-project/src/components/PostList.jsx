import classesPostList from "../components/PostList.module.css";
import Post from "../components/Post"

import { useLoaderData } from "react-router-dom";

import classesPost from "../components/Post.module.css";

export default function PostList() {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={classesPostList.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} className={classesPost.post} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <>
          <h2>There are no posts yet!</h2>
          <p>Start adding some!</p>
        </>
      )}
    </>
  );
}
