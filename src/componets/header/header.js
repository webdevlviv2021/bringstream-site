import React from 'react'
import './header.css'
import logo from '../../assets/image/logo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Explore} from "../../pages/explore/explore4k";
const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
            <div style={{display: 'flex'}}>
        <img className="logoimg" src={logo} alt="logo" width={220}/>
        </div>
                <nav className="navstyle mr-auto">
                    <ul className="menuul ">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/about" className="nav-link">About us</a></li>
                        <li><a href="/explore" className="nav-link">EXPLORE</a></li>
                       
                    </ul>
                </nav>
                    
                <div className="header-content-icons mr-auto">
                    <span className="header-text">AVAILABLE ON</span>
                    <span className="socialicon faapple"><a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8"><i className="fab fa-apple"></i></a></span>
                    <span className="socialicon faandroid"><a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><i className="fa fa-android"></i></a></span>
                    <span className="socialicon"><a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><i className="fa fa-amazon"></i></a></span>
                    <span className="socialicon"><a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><i className="fa fa-roku"></i></a></span>

                </div>

                <div className="login-box">
                <i className="fa fa-play-circle playItem"></i>
                    <a className='startFree'>START FREE TRIAL!</a>
                    <a >LOG IN</a>
                </div>
            </div>
        </div>
    )
}

export default Header;