import React from 'react';

import Slider from "react-slick";

const SlickBussiness1 = () => {
    const $=window.jQuery;
    const settings = {
        arrows:false,
		dots: true,
        dotsClass: 'main-slider-dots',
		infinite: true,
    
	};
    const slides=[
        {image:"img/slide_04.jpg",
        title:"4K NATURE RELAX TV STREAMING SERVICE SPECIALLY DEVELOPED FOR YOUR BUSINESS",
        description:"Make your customers and guests feel more comfortable and safe."
        },
        {image:"img/slide_03.jpg",
        title:"4K NATURE RELAX TV IS AVAILABLE ON ANY PLATFORM",
        description:"Grab your guests’ attention and promote your business"
        },
         {image:"img/slide_02.jpg",
        title:"4K NATURE RELAX TV IS THE BEST SOLUTION FOR YOUR BUSINESS.",
        description:"Bring nature to your workplace & increase sales."
        },
         {image:"img/slide_01.jpg",
        title:"4K NATURE RELAX TV perfect for businesses of any size and industry",
        description:"Keep your customers relaxed and willing to come back more."
        },];
    return (
                <Slider {...settings} className="main-slider">
            
    
    {slides.map((item)=>{

     
            return (
            <div><div className="main-slider__item" style={{"width": "100%" ,"display": "inline-block"}}>
                <div className="container-main">
                    <div className="main-text">
                        <h2>4K NATURE RELAX TV STREAMING SERVICE SPECIALLY DEVELOPED FOR YOUR BUSINESS</h2>
                        <p>Make your customers and guests feel more comfortable and safe.</p>

                        <button type="submit" tabindex="0"><a href="/business#regFormLabel" tabindex="0">START FREE TRIAL</a></button>
                    </div>
                </div>
                <span></span>
                
            <img src={item.image} alt="" />
            </div></div>
            )



        })}
        
            </Slider>
    )
}
export default SlickBussiness1;