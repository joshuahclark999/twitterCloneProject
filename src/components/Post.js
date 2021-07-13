import React from "react";
import "./css/post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../firebase";
// const posts = db.collection('posts');
function Post({
  displayName,
  userName,
  verified,
  timestamp,
  content,
  img,
  avatar,
  id,
}) {
  function deletePost() {
    // db.collection("posts").doc().delete();
    let post = db.collection('posts').where('username', '==', userName);
    post.get().then(querySnapshot=>{
      querySnapshot.forEach(doc => {
        console.log(doc)
      })
    })
    // query.delete();
  }
  
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUserIcon className="post_badge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{content}</p>
            </div>
          </div>
          {/* <img src={img} alt="" /> */}
          <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <DeleteIcon
              fontSize="small"
              onClick={deletePost}
              className="deleteBtn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
