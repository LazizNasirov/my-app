import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

  return <div className={s.posts}>

    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>

    <div className={s.posts}>
      new post
    </div>
    <Post message="salom1" likeCounts='5'/>     
    <Post message="salom2" likeCounts='15'/>     
    <Post message="salom3" likeCounts='3'/>     
  </div>


}

export default MyPosts;