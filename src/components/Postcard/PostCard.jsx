import React from 'react'
import "./Postcard.css"

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import { FiMessageCircle } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { BsEmojiSmile } from 'react-icons/bs';

export default function PostCard({post,likes,name,time,cmt,cmtname,comment,caption,profile1}) {
    return (
        <div className="Postcard">
            <div className="upperline">
                <div>
                    <span><img src={profile1} width="35px" height ="35px" alt="profileimg" className="post__profile"/></span>
                <span>{name}</span></div>
            
                
                <span><HiOutlineDotsHorizontal/></span>
               
                
                </div>
                <div>
                <img src={post} alt="icon" width="100%" className="post"></img>
                </div>
            
            <div className="bottom__icons">
                <div><BsHeart className="bottomicons"/>
                <FiMessageCircle className="bottomicons1"/>
                <FiSend className="bottomicons"/></div>
                <BsBookmark className="bottomicons"/>
                
            </div>
            <div className="bottomcontent">
                <span><b>{likes} likes</b></span>
                <span> <b>{name}</b> {caption}</span>
                <span className="lightertext">View all {cmt} comments</span>
                <span><b>{cmtname}</b> {comment}</span>
                <span className="lightertext"><small>{time}</small></span>
                 
            </div>
            <div className="commentarea"><BsEmojiSmile className="bottomicons"/>
                 <input type="text" placeholder="add a comment..."></input>
                
                 <a href="#">Post</a>
                 </div>

            
        </div>
    )
}
