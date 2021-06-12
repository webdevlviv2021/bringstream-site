import React from 'react';
import './footer.css'
import {EXPANDED_SITENAME} from '../../componets/sitename/sitename';


const Footer = () => {
     return (
     
     <footer className="footer">
     <div className="container">
		<div className="row row-f-pl justify-content-md-center">
			
			<div className="col-lg-7">
                    

                    <ul className="footer-menu">
                         <li className="active"><a href="/">Home</a></li>
                         <li><a href="how">How it Works</a></li>
                         <li><a href="policy">Privacy Policy</a></li>
                         <li><a href="terms">Term of Use</a></li>
                         <li><a href="license">Custom License</a></li>
                         <li><a href="solution">For Bussines</a></li>
                         <li><a href="support">Support</a></li>
                         <li><a href="subscription">Prices</a></li>
                         <li><a href="faq">FAQ</a></li>
                    </ul>
                    <p className="footer-copy">© 2019 
                    <a href="https://4krelax.com/">{EXPANDED_SITENAME}</a>. All Rights Reserved </p>
               </div>

          </div>
          
     </div>
</footer>
     
     )
}

export default Footer;