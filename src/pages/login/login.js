import React from 'react';

const Login = () => {
document.body.classList.add('loginpage');
    return (
        <React.Fragment>
        <div className="darkfullwidth darkfullwidth2">
        <div className="subscriptionform formWhiteOnBlack">
        <div id="regtabs" style={{"display": "none;"}}>
                    </div>
        
        <form id="payment-form" className="formWhiteOnBlack formTiled" external="1">
            <div className="personalform tab1 subscriptiontab" style={{"display": "none;"}}>
            <div className="div-p">More than 1000 hours videos in 4K &amp; 4K HDR quality</div>
            <div className="div-p">One Subscription for all Your Devices</div>
            <div className="div-p">Newly added content every week</div>
            <p className="checklabel select-price-text chlb-active" plan="month_uhd">

                    <a className="before" href="#a"></a>
                    <a className="tofrm" href="#a">Monthly 4K/UHD subscription</a>
                    <a href="#a" className="price-text">$8.99 USD</a>
                    <a href="#a" className="green-textbig">30-Days Free </a>
                    <a href="#a" className="green-text">after free trial ends billed monthly</a>
            </p>
            <p className="checklabel select-price-text" plan="year_uhd">
                    <a className="before" href="#a"></a>
                    <a className="tofrm" href="#a">Annual 4K/UHD subscription </a>
                    <a href="#a" className="price-text">$89.99 USD </a>
                    <a href="#a" className="green-textbig">30-Days Free </a>
                    <a href="#a" className="green-text">after free trial ends billed yearly</a>
            </p>
            <p className="checklabel select-price-text" plan="month_hd">
                    <a className="before" href="#a"></a>
                    <a className="tofrm" href="#a">Monthly HD subscription</a>
                    <a href="#a" className="price-text">$4.99 USD </a>
                    <a href="#a" className="green-textbig">30-Days Free </a>
                    <a href="#a" className="green-text">after free trial ends billed monthly</a>
            </p>
            <p className="checklabel select-price-text" plan="year_hd">
                        <a className="before" href="#a"></a>
                        <a className="tofrm" href="#a">Annual HD subscription</a>
                        <a href="#a" className="price-text">$49.99 USD </a>
                        <a href="#a" className="green-textbig">30-Days Free </a>
                        <a href="#a" className="green-text">after free trial ends billed yearly</a>
            </p>
            <div className="div-p">At the end of your 30-days free trial period, you will be charged according to the recurring subscription plan with the option to unsubscribe at any time. If you cancel the subscription before your trial ends, you won’t be charged.</div>
            <div className="div-p">*Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
            </div>

            <div className="personalform tab2 subscriptiontab" style={{"display": "none;"}}>
            <p className="green-text">More than 1000 hours of videos in 4K &amp; 4K HDR quality</p>
            <p className="green-text">For Small Business Partners: Doctors Offices, Hospitals, Retreats, Spas, Stress Management Programs, Nursing Homes, </p>
            <p className="green-text">Schools, Retail and Digital Signage, Screensaver, Ambiance, Study Aid, Meditation aid, Meditation Background, etc.</p>
            <p className="green-text">Help your visitors and clients feel calm and relaxed!</p>
            <p className="checklabel select-price-text" plan="month_uhd_business_1tv">
                <a className="before" href="#a"></a>
                <a href="#a">Monthly 4K/UHD subscription</a>
                <a href="#a" className="price-text">$99.00 USD </a>
                <a href="#a" className="green-textbig">7-Days Free </a>
                <a href="#a" className="green-text">after free trial ends billed monthly</a>
                </p>
            <p className="checklabel select-price-text" plan="year_uhd_business_1tv">
                <a className="before" href="#a"></a>
                <a href="#a">Annual 4K/UHD subscription</a>
                <a href="#a" className="price-text">$999.00 USD </a>
                <a href="#a" className="green-textbig">7-Days Free </a>
                <a href="#a" className="green-text">after free trial ends billed yearly</a>
            </p>
            <p className="checklabel select-price-text" plan="month_hd_business_1tv">
                <a className="before" href="#a"></a>
                <a href="#a">Monthly HD subscription</a>
                <a href="#a" className="price-text">$49.00 USD </a>
                <a href="#a" className="green-textbig">7-Days Free </a>
                <a href="#a" className="green-text">after free trial ends billed monthly</a>
                </p>
            <p className="checklabel select-price-text" plan="year_hd_business_1tv">
                <a className="before" href="#a"></a>
                <a href="#a">Annual HD subscription</a>
                <a href="#a" className="price-text">$499.00 USD </a>
                <a href="#a" className="green-textbig">7-Days Free </a>
                <a href="#a" className="green-text">after free trial ends billed yearly</a>
            </p>
            <div className="div-p">At the end of your 7 day free trial, 
                    you will be charge as a    recurring monthly subscription,
                    with the option to unsubscribe at any time. If you cancel before your trial ends, you won’t be charged.</div>
                <div className="div-p">* Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
                <div className="div-p">* Watching time limitation is 8 hours per day.</div>
                <div className="div-p">* The price is indicated for businesses with up to 5 employees. Contact us for a <a href="license">custom license</a> if you are a large business company or want to add number of screens to your license.</div>
            </div>
        </form>
        <form id="loginform" className="formWhiteOnBlack formVertical" >
            <div className="loginform subscriptiontab" style={{"display": "block"}} >
                <h3>Login to <span>4K Nature Relax TV</span></h3>
                <div className="div-p"><input type="text" className="user-email" name="email" placeholder="Email Address" required="true" pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" /></div>
                <div className="div-p"><input type="submit" value="Login" /></div>
                <div className="div-p">
                    <div className="hr-half" ><hr/></div>
                    <div className="hr-or">OR</div>
                    <div className="hr-half" ><hr/></div>
                </div>
                <div className="div-p hasLoginSocialButton">
                    <span className="loginGoogleButton loginSocialButton">Login with Google</span>
                    <span className="loginFacebookButton loginSocialButton">Login with Facebook</span>
                </div>
                <div className="div-p">Don't have an account? <input type="button" class="gosignup" value="Sign up"/></div>
            </div>
        </form>

        <form id="activateform" >
                <div className="activateform subscriptiontab" style={{"display": "none"}}>
                <h3>Login to <span>4K Nature Relax TV</span></h3>
                <div className="div-p"><input value="" name="email" type="text" placeholder="Email Address" required="true" pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" /></div>
                <div className="div-p"><input type="text" name="code" placeholder="Activation code" required="true" pattern="^[0-9]{5,9}$" /></div>
                <div className="div-p"><input type="submit" value="Login" /></div>
                <div className="div-p">Don't have an account? <input type="button" class="gosignup" value="Sign up" /></div>
            </div>      
        </form>        
        <div className="regformsuccess subscriptiontab formWhiteOnBlack"  style={{"display": "none;"}}>
            <h3>Thank you for subscribing <span>4K Nature Relax TV</span></h3>
            <div className="div-p" >You free trial account has now been activated. Once it has ended,<br/>
            you credit card will be charged $8.99 per mounth. You will be billed once per month or year, with the option to unsubscribe at any time.</div>
            <div className="div-p"><input type="submit" id="startwatch" value="Start Watching Now" /></div>        
        </div>
        <div className="loginformsuccess subscriptiontab formWhiteOnBlack" style={{"display": "none"}}>
            <h3>We have sent you a <span>LOG IN LINK</span></h3>
            <div className="div-p">Check your inbox and click on the green button provided to LOG IN to your account.</div><br/>
            <div className="div-p"><input type="submit" id="resend" value="Resend email" />
                </div>     
            <div className="div-p">Check your spam or junk folder if you don't see the email.
            </div>
        </div>
        <div className="activateformsuccess subscriptiontab formWhiteOnBlack" style={{"display": "none"}}>
                            <h3>We have sent you a <span>ACTIVATION LINK</span></h3>
                <div className="div-p">Check your inbox and click on the green button provided to LOG IN to your account.</div><br/>
                <div className="div-p"><input type="submit" id="resend2" value="Resend email" />
                    </div>     
                <div className="div-p" >Check your spam or junk folder if you don't see the email.
                </div>
         </div>
    </div>
</div> 
</React.Fragment>
    )
}

export default Login;