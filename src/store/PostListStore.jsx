import { createContext, useReducer } from "react";
import React from "react";
import imageUrl from "../assets/react.svg";
import { FaTag } from "react-icons/fa";

export const Posts = createContext({
  postList: [],
  addInitialPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    console.log("in the initial post");
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addInitialPost = (posts) => {
    console.log(posts);
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const addPost = (id, image, title, userId, postReaction, tags) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: id,
        imgSrc: image,
        cardTitle: title,
        userId: userId,
        reaction: postReaction,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
    console.log(postId);
  };

  return (
    <Posts.Provider
      value={{
        postList,
        addInitialPost,
        addPost,
        deletePost,
      }}
    >
      {children}
    </Posts.Provider>
  );
};

export default PostListProvider;
