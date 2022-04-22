import React from "react";

const Profil = ({ user }) => {
  return (
    <div className="container">
      {console.log(user)}
      <img
        className="avatar"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGoUk-yr-ur_w/profile-displayphoto-shrink_200_200/0/1598368779896?e=1655942400&v=beta&t=AlNQ5LfY1cevL2u0vE2uEX-tUnbzyGcCTr2Z2uhrliQ"
        alt=""
      />
      <div className="profil-info">
        <h1>{user.name}</h1>
        <ul>
          <li className="item">50 Post</li>
          <li className="item">5 M Followers</li>
          <li className="item">0 Following</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          fugiat repellat consequatur ipsum in reiciendis deleniti cum
          accusantium facere? Eius odit corrupti excepturi cum? Laborum ab cum
          porro optio doloribus.
        </p>
      </div>
    </div>
  );
};

export default Profil;
