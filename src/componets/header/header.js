import React from 'react'
import './header.css'
import logo from '../../assets/image/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
        <img src={logo} alt="logo" width={220}/>
                <nav >
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Explore</li>
                    </ul>
                </nav>
                    
                <div>
                    <span>AVAILABLE ON

</span>
                    <span><a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8"><i class="fab fa-apple"></i></a></span>
                    <span><i class="fa fa-android"></i></span>
                    <span><i class="fa fa-amazon"></i></span>
                    <span><i class="fa fa-roku"></i></span>

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