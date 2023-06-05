import React from "react";
import s from './Post.module.css';


const Post = (probs) => {

  return <div className={s.item}>

    <div>
      <img className={s.img_avatar} src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-marshmellou.jpg"></img>
      
      <div className={s.item_text}>
        {probs.message}
      </div>

      <div>
        <img className={s.img_Like} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Facebook_like_thumb.png/1196px-Facebook_like_thumb.png"/>
        <span>Like</span>
        {probs.likeCounts}
      </div>
    </div>
       
  </div>


}

export default Post;