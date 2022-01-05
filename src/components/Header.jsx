
import React from 'react'
import "./Header.css";
import logo from "../../src/assests/logo.png";
import Search from "../assests/search.svg";
import { HiHome } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsPlusSquare } from 'react-icons/bs';
import { FiCompass } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';

export default function Header() {
    return (
        <div className="Headerr">
            <div className="logo">
                <img src={logo} width="103px" height="29px" alt="logo"></img>
            </div>
            <div className="searchbar">
                <img src={Search} width="17px" alt="search icon"></img>
                <input type="search" placeholder="Search"></input>
            </div> 
            <label class="switch">
            <i class="fas fa-adjust"></i>
            <div>
              <input type="checkbox" className="colorww" />
              <span class="slider round"></span>
            </div>
          </label>

            <div className="icons">
                <HiHome  className="header_icons"/>
                <RiMessengerLine className="header_icons"/>
                <BsPlusSquare className="header_icons"/>
                <FiCompass className="header_icons"/>
                <BsHeart className="header_icons"/>
                <BsPersonCircle  className="header_icons"/>
            </div>
        </div>
    )
}               
