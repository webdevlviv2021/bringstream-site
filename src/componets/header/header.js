import React from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Explore} from "../../pages/explore/explore4k";
const Header = () => {
    const handleClick = event => {
  event.preventDefault();
  localStorage.setItem('loggedin',false);
  localStorage.setItem('useremail','');
  window.location.href='/';
    
};
    const isLoggedin = localStorage.getItem('loggedin') === 'true';
    const useremail = isLoggedin ? localStorage.getItem('useremail') : '';
    const inIframe = window.self!==window.top;
    const hideIframeHeader = !inIframe ?"":"displayiframeheader"
    return (

            <nav className={"navbar-4k-style navbar navbar-expand-lg navbar-dark  sticky-top " +hideIframeHeader} style={{"backgroundColor":"#333"}}>
    <a className="logo navbar-brand" href="/">
        <img className="logoimg" src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            
                    <ul className="navbar-nav-style navbar-nav mr-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item active"><a href="/about" className="nav-link">About us</a></li>
                        <li className="nav-item active"><a href="/subscription" className="nav-link">SUBSCRIBE</a></li>
                        <li className="nav-item active"><a href="/explore" className="nav-link">EXPLORE</a></li>
                        
                    </ul>
        
                    
            
<div className="avalid-social mr-auto">
            <p>Available on</p>
            <span className="social social-ios">
                <a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8" target="_blank" rel="nofollow"><i className="fa fa-apple"></i></a>
                <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><i className="fa fa-android"></i></a>

                <a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><i className="fa fa-amazon"></i></a>

                <a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><img src="/img/roku-logo.png" alt="roku-app"/></a>
            </span>
        </div>
          {isLoggedin?(
            <div class="more-inform my-2 my-lg-0">
                <div class="avalid-social mr-auto">
                    <a href="#" class="bottom-smart">
                        <p> <span class="user_name_in_header_hello">Hello</span><span id="user_name_in_header">Customer</span></p>
                    </a>
                </div>
            </div>)
            :
            (
                <React.Fragment></React.Fragment>
            )}    
        <div className="more-inform my-2 my-lg-0">
        {isLoggedin?(
        <React.Fragment>
                <a href="/personal-data" class="sign-in" id="personal">Settings</a>
                <a href="/faq" class="sign-in" id="faq">FAQ</a>
                <a href="/logout" class="sign-in" id="logout" onClick={handleClick}>Logout</a> 
        </React.Fragment>
        ):
        (
        <React.Fragment>
                <a href="subscription" className="bottom-smart" id="navBarStartTrial">
                    <i className="fa fa-play-circle"></i>
                    <span>Start free trial!</span>
                </a>
                <a href="login" className="sign-in">Log in</a>
            </React.Fragment>   
        )
            }
        </div>
            </div>
        </nav>
    )

}

export default Header;