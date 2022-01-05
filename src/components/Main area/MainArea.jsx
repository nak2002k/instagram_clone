import React from 'react'
import StoryCard from '../Storycard/StoryCard'
import "./MainArea.css"
import story1 from "../../assests/Stories/story1.jpg"
import story2 from "../../assests/Stories/story2.jpg"
import story3 from "../../assests/Stories/story3.jpg"
import story4 from "../../assests/Stories/story4.jpg"
import story5 from "../../assests/Stories/story5.jpg"
import story6 from "../../assests/Stories/story6.jpg"
import story7 from "../../assests/Stories/story7.jpg"
import PostCard from '../Postcard/PostCard'
import Post1 from "../../assests/posts/post1.jpg"
import Post2 from "../../assests/posts/post2.PNG"
import Post4 from "../../assests/posts/post4.PNG"
import Post5 from "../../assests/posts/post5.PNG"
import Post6 from "../../assests/posts/post6.PNG"
import Post7 from "../../assests/posts/post7.PNG"
import Post8 from "../../assests/posts/post8.PNG"
import Post9 from "../../assests/posts/post9.PNG"
import Post3 from "../../assests/posts/post3.PNG"
import Post11 from "../../assests/posts/post11.jpg"




export default function MainArea() {
    return (
        <div className="mainarea">
           <div className="storyarea">

                 
                 <StoryCard img={story1} username="Nakul"/>
                 <StoryCard img={story2} username="Hinde"/>
                 <StoryCard img={story3} username="Cham"/>
                 <StoryCard img={story4} username="Ashish"/>
                 <StoryCard img={story5} username="Ajinkya"/>
                 <StoryCard img={story6} username="Anagha"/>
                 <StoryCard img={story7} username="Nilima"/>
                 <StoryCard img={story2} username="Aditya"/>
                 <StoryCard img={story6} username="OMAditya"/>
                 <StoryCard img={story4} username="Alok"/>
                 <StoryCard img={story3} username="Chinmay"/>
                 
            </div>
            <div>
                      <div className="postarea">
              
                    <PostCard name="cham_511" post={Post1} likes="956"cmtname="b.association" cmt="233" comment="Fantastic Post!!" caption="Truee!!!" time="16 HOURS AGO" profile1={story2}/>
                    <PostCard name="Aditya_Rasal" post={Post2} likes="9,342"cmtname="daily_diaries" cmt="811" comment="yesssss" caption="💯💯" time="20 HOURS  AGO" profile1={story6}/>
                    <PostCard name="slave_ashish" post={Post3} likes="16,723"cmtname="shark_games" cmt="32" comment="LOL" caption="😂🤣😂🤣" time="23 HOURS AGO" profile1={Post6}/>
                    <PostCard name="anagha_kamatkar" post={Post4} likes="2,73,345"cmtname="dac.association" cmt="902" comment="Agreed...." caption="Truee AF!!!" time="1 DAY AGO" profile1={story1}/>
                    <PostCard name="jeet_purohit" post={Post5} likes="95,806"cmtname="Aditya_Rasal" cmt="20" comment="Thats my boy!" caption="Your mind should be Stronger than Your Emotions!" time="1 DAY AGO" profile1={story4}/>
                    <PostCard name="hokage_ajinkya" post={Post6} likes="34,209"cmtname="nakul_kamatkar" cmt="3" comment="ikrrr!!" caption="Only if i could have all that...." time="2 DAYS AGO" profile1={story7}/>
                    <PostCard name="anushka_sharma" post={Post7} likes="95"cmtname="hokage_ajinkya" cmt="17" comment="give me that moneyy" caption="😨😨😨😨" time="2 DAYS AGO" profile1={story6}/>
                    <PostCard name="best_quotes" post={Post8} likes="56"cmtname="super_quotes" cmt="208" comment="that's what true friends do!" caption="🤩🤩🤩" time="3 DAYS AGO" profile1={story5}/>
                    <PostCard name="new_mindset" post={Post9} likes="15"cmtname="killer_boy" cmt="311" comment="Great post as always" caption="😎😎" time="5 DAYS AGO" profile1={Post5}/>
                    <PostCard name="latest_news" post={Post11} likes="92,306"cmtname="mark_enterprises" cmt="342" comment="SAD😥😥" caption="🥺🥺" time="28 DAYS AGO" profile1={Post1}/>
           </div>
           </div>
        </div>
    )
}
