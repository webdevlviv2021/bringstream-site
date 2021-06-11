import React from 'react';

const HowItWorks = () => {

    return (
        <React.Fragment>
            <div id="slides" style={{"position": "relative", "overflow": "hidden", "width": "100%", "height": "452px"}} />
        <div class="slides-control" style={{"position": "relative", "height": "100%", "width": "1519px", "left": "-1519px"}}>
            <ul class="slides-container" style={{"margin": "0px", "padding": "0px", "list-style": "none", "position": "relative", "height": "100%", "display": "block"}}>
    
                <li style={{"display": "block", "left": "1519px", "position": "absolute", "overflow": "hidden", "height": "100%", "width": "1519px", "top": "0px", "z-index": "2", "opacity": "1"}}>
                <img src="img/africa-bg.jpg" alt="africa video presentacion" />

        <div class="content-slides content-slides-video" style={{"background-image": "url('img/africa-bg.jpg')", "background-size": "cover"}}>
        <div class="container">
        <div class="aligner slides-video-s">
        <div class="aligner-video">
                <iframe src="https://player.vimeo.com/video/265787071?title=0&amp;byline=0&amp;portrait=0" width="853" height="480" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        <div class="box-inf-v">
                    <a class="box-i-star" href="subscription">GET ONE MONTH FREE</a>
                    <a class="box-i-more" href="business">SOLUTION FOR YOUR BUSINESS</a>
        </div>
                
        </div>
        </div>
        </div>
        </div>
        </li>


            </ul>
        </div>
    
        </React.Fragment>
    )
}

export default HowItWorks;