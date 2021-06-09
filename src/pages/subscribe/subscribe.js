import React from 'react';

const Subscribe = () => {
document.body.classList.add('sub');
    return (
    <React.Fragment>

    <a name="regFormLabel"></a>
    <input type="hidden" id="loginmode" value="subscription"/>
    <div class="darkfullwidth darkfullwidth2">
        <div className="subscriptionform formWhiteOnBlack">
            <div id="regtabs" style={{"display": "block"}}>
                <h5 className="t1 tabLink h5active" data="personalform">INDIVIDUAL</h5>
                <h5 class="t2 tabLink" data="businessSignupForm">
                <span>BUSINESS<strong>NEW</strong>
                </span> 
                </h5>
        </div>
            <form id="payment-form" class="formWhiteOnBlack formTiled" external="1" >
        <div class="personalform tab1 subscriptiontab" style={{"display": "block"}}>
                <div class="div-p">More than 1000 hours videos in 4K &amp; 4K HDR quality</div>
                <div class="div-p">One Subscription for all Your Devices</div>
                <div class="div-p">Newly added content every week</div>
                    <p class="checklabel select-price-text chlb-active" plan="month_uhd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Monthly 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$8.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_uhd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Annual 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$89.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="month_hd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Monthly HD subscription</a>
                        <a href="#a" class="price-text">$4.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_hd">
                        <a class="before" href="#a"></a>
                        <a class="tofrm" href="#a">Annual HD subscription</a>
                        <a href="#a" class="price-text">$49.99 USD</a>
                        <a href="#a" class="green-textbig">30-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
        <div class="div-p">At the end of your 30-days free trial period, you will be charged according to the recurring subscription plan with the option to unsubscribe at any time. If you cancel the subscription before your trial ends, you won’t be charged.</div>
        <div class="div-p">*Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
        </div>

        <div class="personalform tab2 subscriptiontab dn" style={{"display": "block"}}>
                <p class="green-text">More than 1000 hours of videos in 4K &amp; 4K HDR quality</p>
                <p class="green-text">For Small Business Partners: Doctors Offices, Hospitals, Retreats, Spas, Stress Management Programs, Nursing Homes, </p>
                <p class="green-text">Schools, Retail and Digital Signage, Screensaver, Ambiance, Study Aid, Meditation aid, Meditation Background, etc.</p>
                <p class="green-text">Help your visitors and clients feel calm and relaxed!</p>
                <p class="checklabel select-price-text" plan="month_uhd_business_1tv">
                        <a class="before" href="#a"></a>

                        <a href="#a">Monthly 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$99.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                </p>
                <p class="checklabel select-price-text" plan="year_uhd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Annual 4K/UHD subscription</a>
                        <a href="#a" class="price-text">$999.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="month_hd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Monthly HD subscription</a>
                        <a href="#a" class="price-text">$49.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed monthly</a>
                    </p>
                    <p class="checklabel select-price-text" plan="year_hd_business_1tv">
                        <a class="before" href="#a"></a>
                        <a href="#a">Annual HD subscription</a>
                        <a href="#a" class="price-text">$499.00 USD</a>
                        <a href="#a" class="green-textbig">7-Days Free </a>
                        <a href="#a" class="green-text">after free trial ends billed yearly</a>
                    </p>
        <div class="div-p">At the end of your 7 day free trial, you will be charge as a recurring monthly subscription,
                    with the option to unsubscribe at any time. If you cancel before your trial ends, you won’t be charged.</div>
        <div class="div-p">* Concurrent multi-device function is not allowed (only 1 TV at a time)</div>
        <div class="div-p">* Watching time limitation is 8 hours per day.</div>
        <div class="div-p">* The price is indicated for businesses with up to 5 employees. Contact us for a <a href="license">custom license</a> if you are a large business company or want to add number of screens to your license.</div>
        </div>
        </form>
        </div>
        </div>



        <section className="login-section" >
        <div className="login-div" >
            <form id="loginform" class="formWhiteOnBlack formVertical" >
            <div class="loginform subscriptiontab" style={{"display": "none"}} >
                <h3>Login to <span>4K Nature Relax TV</span></h3>
                <div class="div-p"><input value="" type="text" class="user-email" name="email" placeholder="Email Address" required="true" pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"/></div>
                <div class="div-p"><input type="submit" value="Login"/></div>
                <div class="div-p">
                <div class="hr-half"><hr/></div>
                <div class="hr-or">OR</div>
                <div class="hr-half"><hr/></div></div>
                <div class="div-p hasLoginSocialButton">
                    <span class="loginGoogleButton loginSocialButton">Login with Google</span>
                    <span class="loginFacebookButton loginSocialButton">Login with Facebook</span>
                </div>
                <div class="div-p">Don't have an account? <input type="button" class="gosignup" value="Sign up"/></div>
        </div>      
        </form>
            </div>
        </section>
        <section className="activate-section">
            <form id="activateform">
                <div class="activateform subscriptiontab" style={{"display": "none"}} >
                    <h3>Login to <span>4K Nature Relax TV</span></h3>
                <div class="div-p"><input value="" name="email" type="text" placeholder="Email Address" required="true" pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" /></div>
                <div class="div-p"><input type="text" name="code" placeholder="Activation code" required="true" pattern="^[0-9]{5,9}$"/></div>
                <div class="div-p"><input type="submit" value="Login" /></div>
                <div class="div-p">Don't have an account? <input type="button" class="gosignup" value="Sign up" /></div>
                </div>      
        </form>
        </section>
            <div class="regformsuccess subscriptiontab formWhiteOnBlack" style={{"display": "none"}}>
            <h3>Thank you for subscribing <span>4K Nature Relax TV</span></h3>
            <div class="div-p">You free trial account has now been activated. Once it has ended,<br/>
            you credit card will be charged $8.99 per mounth. You will be billed once per month or year, with the option to unsubscribe at any time.</div>
            <div class="div-p"><input type="submit" id="startwatch" value="Start Watching Now" /></div>        
            </div>
            <div class="loginformsuccess subscriptiontab formWhiteOnBlack" style={{"display": "none"}} >
            <h3>We have sent you a <span>LOG IN LINK</span></h3>
            <div class="div-p">Check your inbox and click on the green button provided to LOG IN to your account.
            </div><br/>
            <div class="div-p"><input type="submit" id="resend" value="Resend email" />
            </div>     
            <div class="div-p">Check your spam or junk folder if you don't see the email.</div>
            </div>
            <div class="activateformsuccess subscriptiontab formWhiteOnBlack" style={{"display": "none"}}>
                <h3>We have sent you a <span>ACTIVATION LINK</span></h3>
            <div class="div-p">Check your inbox and click on the green button provided to LOG IN to your account.</div>
            <br/>
            <div class="div-p" ><input type="submit" id="resend2" value="Resend email"/></div>     
            <div class="div-p">Check your spam or junk folder if you don't see the email.</div>
            </div>


            {/* ---CUSTOM FORM--- */}

            
            <div id="a" class="custom-form">
    <h5 style={{"marginBottom":"20px"}}> <span> ACCOUNT DETAILS</span> </h5>
    <div class="subscriptionform" >
        <form id="regform" class="formBlackOnWhite formVertical" data-secret="seti_1IxrrjH6mJucSw4DFzklBIqc_secret_Jb3zhZ1UoyIYjy7kF8T4Dh15yVJ7xpm" external="1" >
            <div class="businessSignupForm subscriptiontab subscriptiontab2" style={{"display": "block"}} >
                <div class="div-p"><input type="text" class="fill-name" name="name" placeholder="Full Name" required="true" /></div>
                <div class="div-p" ><input value="" type="text" class="fill-email" name="email" placeholder="Email Address" required="true" pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" /></div>
                <div class="div-p" >
                    
                    <div class="flex sub-and-there" style={{"marginBottom":"20px","fontWeight":"300"}} >
                        <div class="ston" >
                            <input type="hidden" name="plan" id="plan" value="month_uhd_business_1tv" />
                            <input type="checkbox" checked="checked" name="news" value="1" id="news" />
                            <a href="#">Subscribe to our Newsletter</a>
                        </div>
                    </div>
                </div>
                <div id="signup-step-1" >
                    <div class="div-p"><input class="signup-continue-button" type="button" value="Continue" /></div>
                    <div class="div-p"><div class="hr-half"><hr/></div><div class="hr-or" >OR</div><div class="hr-half"><hr/></div></div>
                    <div class="div-p hasLoginSocialButton" >
                        <span class="continueGoogleButton loginSocialButton" >Continue with Google</span>
                        <span class="continueFacebookButton loginSocialButton" >Continue with Facebook</span>
                    </div>
                        <div class="div-p" style={{"marginBottom": "0"}} ><span style={{"display": "inline-block","verticalAlign": "middle"}}>Already a member? &nbsp;</span> <input type="button" class="gologin" value="Login" style={{"verticalAlign": "middle"}} /></div>
                </div>
                <div id="signup-step-2" style={{"display": "none"}}>
                    <h5> <span> PAYMENT DETAILS</span> </h5>
                    <div class="div-p">
                        <div id="card-input">
                            <input id="cardholder-name" type="text" placeholder="Name on card" required="true"/>
                            <div id="card-element" class="StripeElement StripeElement--empty"><div class="__PrivateStripeElement" style={{"margin":"0px !important","padding":"0px !important","border":"none !important","display":"block !important","background":"transparent !important","position":"relative !important","opacity":"1 !important"}} /><iframe name="__privateStripeFrame1085" frameborder="0" allowtransparency="true" scrolling="no" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-b6b552c4fb5f92670eefc7ec2994959f.html#wait=false&amp;style[base][color]=%2332325d&amp;style[base][fontFamily]=%22Helvetica+Neue%22%2C+Helvetica%2C+sans-serif&amp;style[base][fontSmoothing]=antialiased&amp;style[base][fontSize]=16px&amp;style[base][::placeholder][color]=%23aab7c4&amp;style[invalid][color]=%23fa755a&amp;style[invalid][iconColor]=%23fa755a&amp;rtl=false&amp;componentName=card&amp;keyMode=live&amp;apiKey=pk_live_5bW0yLxOKB5FpMaLspLRdiik00acIYcIaE&amp;referrer=https%3A%2F%2F4krelax.com%2Fsubscription&amp;controllerId=__privateStripeController1081" title="Защищенное окно для ввода данных оплаты картой" style={{"border":"none !important","margin":"0px !important","padding":"0px !important","width":"1px !important","minWidth":"100% !important","overflow":"hidden !important","display":"block !important","userSelect":"none !important","willChange":"transform !important","height":"19.2px"}}></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{"border":"none !important","display":"block !important","position":"absolute !important","height":"1px !important","top":"-1px !important","left":"0px !important","padding":"0px !important","margin":"0px !important","width":"100% !important","opacity":"0 !important","background":"transparent !important","pointerEvents":"none !important","fontSize":"16px !important"}} /></div></div>
                        </div>
                        <div id="card-saved" style={{"display": "none"}}>
                            Card Saved
                        </div>
                    </div>
                    <div class="about-subscription">
                        <div class="flex">
                            <div class="total-label">Total:</div>
                            <div class="price-label"><span>$99.00 USD
                            </span> ( After free trial ends )</div>
                        </div>
                    </div>
                    <div class="div-p">By clicking on the “Start free trial!” button, you agree to our <a href="terms">Terms of use</a>,  <a href="privacy">Privacy Policy</a> and confirm that you are over the age of 16.</div>
                    <div class="div-p"><input id="startFreeTrial" type="submit" value="Start free trial!"/></div>
                </div>
            
    </form>
    </div>
    </div>
        </React.Fragment>
    )
}

export default Subscribe;

//js events
