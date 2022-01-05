import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard';
import './SideBar.css'
import profile2 from "../../assests/profiles/profile2.jpg"
import profile3 from "../../assests/profiles/profile3.jpg"
import profile4 from "../../assests/profiles/profile4.jpg"
import profile5 from "../../assests/profiles/profile5.jpg"
import profile6 from "../../assests/profiles/profile6.jpg"
import profile7 from "../../assests/profiles/profile7.jpg"
import profile8 from "../../assests/profiles/profile8.gif"
export default function SideBar() {
    return (
        <div className="sidebar">

           <ProfileCard usr="nakul_kamatkar" width="60px" name="Nakul Kamatkar" btn="Switch" profile={profile4}/>
           <div className="suggestions">
               <span>Suggestions For You</span>
               <a href="#"><small>See All</small></a>
           </div>
           <div className="cards">
               <ProfileCard usr="anagha_kamatkar" width="35px" name="Follows you" btn="Follow" profile={profile2}/>
               <ProfileCard usr="cham_511" width="35px" name="Follows you" btn="Follow" profile={profile3}/>
               <ProfileCard usr="Aditya_rasal" width="35px" name="Follows you" btn="Follow" profile={profile5}/>
               <ProfileCard usr="Slave_Ashish" width="35px" name="Follows you" btn="Follow" profile={profile6}/>
               <ProfileCard usr="hokage_ajinkya" width="35px" name="Follows you" btn="Follow" profile={profile7}/>
               <ProfileCard usr="jeet_purohit" width="35px" name="Follows you" btn="Follow" profile={profile8}/>
           </div>
           <div className="last"><p><small><pre>           About-Help-PressAPI-JobsPrivacy-Terms-Locations-<br/>           Top Accounts-Hashtags-Language-
English</pre></small></p></div><div className="last1">
© 2021 INSTAGRAM FROM META</div>
        </div>
    );
}
