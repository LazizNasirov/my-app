import React from "react";
import s from './MyPosts.module.css';


const MyPosts = () => {

  return <div className={s.item}>

    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>

    <div className={s.item}>
      new post
    </div>
    <div className={s.item}>
      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"></img>
      post2
    </div>
    <div className={s.item}>
      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"></img>
      post3
    </div>
    <div className={s.item}>
      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"></img>
      post4
    </div>        
  </div>


}

export default MyPosts;