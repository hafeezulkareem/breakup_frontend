import React from "react";

import {
   ProfileContainer,
   ProfileImage,
   ProfileImageContainer,
   UserDetailsContainer,
   UserEmailAndPassword,
   Username,
} from "./styledComponent";

const Profile = () => {
   const userDetails = localStorage.getItem("userDetails");
   const parsedUserDetails = userDetails
      ? JSON.parse(userDetails)
      : { name: "Name", email: "Email" };

   return (
      <ProfileContainer>
         <ProfileImageContainer>
            <ProfileImage src="https://res.cloudinary.com/trucmachin/image/upload/c_thumb,w_400,g_face/v1607022210/avatar/spwho5a72zebv7wjfdvu.jpg" />
         </ProfileImageContainer>
         <UserDetailsContainer>
            <Username>{parsedUserDetails.name}</Username>
            <UserEmailAndPassword>
               {parsedUserDetails.email}
            </UserEmailAndPassword>
            <UserEmailAndPassword>********</UserEmailAndPassword>
         </UserDetailsContainer>
      </ProfileContainer>
   );
};

export default Profile;
