import {   ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import  "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
    const [isscrolled,setTsScrolled]=useState(false);
    window.onscroll=()=>{
        setTsScrolled(window.pageYOffset==0?false:true);
        return () => (window.onscroll = null);
}
     
  return (
    <div className={isscrolled?"navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                <span>Homepage</span>
                <span>series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>Kid</span>
                <Notifications className="icon"/>
                <img
            src=" "
            alt=""/>
            
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>

            </div>
        </div>
        </div>
  )
}

export default Navbar