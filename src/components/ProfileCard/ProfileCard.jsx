import React from 'react'
import "./ProfileCard.css"
import Profile2 from "..//..//..//src/assests/profiles/profile2.jpg"
export default function ProfileCard({usr,name,width,btn,profile}) {
    return (
        <div className="Profile_card">
            <img src={profile} alt="profile" width={width} className="tras" />
            <div className="profilenames">
            <span className="usrname">{usr}</span>
           <span className="nme">{name}</span></div>
           <a href="#"><small>{btn}</small></a>
        </div>
    )
}
