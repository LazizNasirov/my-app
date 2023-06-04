import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';


const Profile = () => {

  return <div className={s.content}>
    <div>
      <img className={s.img1} src='https://cdn.shopify.com/s/files/1/0070/7032/files/best-free-stock-photo-websites.jpg?v=1619036042&width=1024'></img>
    </div>
    <div>
      <img className={s.img2} src='https://static.vecteezy.com/packs/media/photos/term-bg-3-f6a12264.jpg'></img>
    </div>

    <div>
      ava + description
    </div>

    <MyPosts />
  </div> 

}

export default Profile;