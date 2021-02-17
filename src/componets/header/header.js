import React from 'react'
import './header.css'
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
            <div style={{display: 'flex'}}>
        <img className="logoimg" src={logo} alt="logo" width={220}/>
        </div>
                <nav >
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Explore</li>
                    </ul>
                </nav>
                    
                <div class="header-content-icons">
                    <span className="header-text">AVAILABLE ON</span>
                    <span><a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8"><i className="fab fa-apple"></i></a></span>
                    <span><i className="fa fa-android"></i></span>
                    <span><i className="fa fa-amazon"></i></span>
                    <span><i className="fa fa-roku"></i></span>

                </div>

                <div className="login-box">
                    <a>START FREE TRIAL!</a>
                    <a >LOG IN</a>
                </div>
            </div>
        </div>
    )
}

export default Header;