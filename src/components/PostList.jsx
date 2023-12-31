import React, { useContext } from "react";
import Post from "./Post";
import { Posts } from "../store/PostListStore";
import WelcomeMessge from "./WelcomeMessge";

const PostList = () => {
  const { postList, addInitialPost } = useContext(Posts);

  const handleGetPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
      });
  };
  return (
    <div className="post-list">
      {postList.length === 0 && (
        <WelcomeMessge onGetPostClick={handleGetPost} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
