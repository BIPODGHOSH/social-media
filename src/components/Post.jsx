import React, { useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Posts } from "../store/PostListStore";

const Post = ({ post }) => {
  console.log(post);
  const { deletePost } = useContext(Posts);
  const { id, imgSrc, cardTitle, cardBody, reaction, userId, tags } = post;

  return (
    <div
      className="card"
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: " 10px auto ",
        padding: "5px",
      }}
    >
      <div className="delete-post">
        <div className="delete-icon" onClick={() => deletePost(id)}>
          <MdDelete size={40} />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        {/* <p className="card-text">{cardBody}</p> */}
        {tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary ms-2">
            #{tag}
          </span>
        ))}
      </div>
      {imgSrc ? (
        <img src={imgSrc} className="card-img-top" alt="..." />
      ) : (
        <p>{post.body}</p>
      )}

      <div className="postFooter">
        <div style={{ position: "relative" }}>
          <AiTwotoneLike size={40} />
          <span style={{ position: "absolute" }}>{reaction}</span>
        </div>

        <FaCommentAlt size={40} />
        <FaShare size={40} />
      </div>
    </div>
  );
};

export default Post;
