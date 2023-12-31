import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { Posts } from "../store/PostListStore";
import WelcomeMessge from "./WelcomeMessge";
import LodingSpinner from "./LodingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(Posts);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching ? (
        <LodingSpinner />
      ) : (
        <div className="post-list">
          {postList.length === 0 && <WelcomeMessge />}
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
