import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import OwlCarouselMain from '../../componets/owlcarouselmain/owlcarouselmain';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PlaylistCarousel from '../../componets/playlistcarousel/playlistcarousel';
import PlaylistView from '../../componets/playlistview/playlistview';
import PlaylistViewSecond from '../../componets/playlistviewsecond/playlistviewsecond';

import "./explore4k.css";
import sha1 from 'crypto-js/sha1';
import SlickplaylistsExplore from '../../componets/slickplaylistsexplore/slickplaylistsexplore';
import Slickplaylists from '../../componets/slickplaylists/slickplaylists';
import {EXPANDED_SITENAME, EXPANDED_SITENAME2} from '../../componets/sitename/sitename';



const Explore = (props) => {
    const $=window.jQuery;

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(props.plst);
    const [someRes, setSomeRes] = React.useState([]);
    const [isPlaylistsNotEmpty, setIsPlaylistsNotEmpty] = React.useState(false);
    const handleChange = event => {
    setSearchTerm(event.target.value);
};


    if((props.plst!==undefined) && (props.plst.playlists!==undefined) && (props.plst.playlists.playlists!==undefined) &&(props.plst.playlists.playlists instanceof Array) ){
    setIsPlaylistsNotEmpty(true);
    }


    React.useEffect(async() => {


        $('.owl-carousel-c-second').owlCarousel({nav:true,
        center:true,
        items:4,
        loop: true,
        slideBy:2,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
            1200: {
                items: 4,
                nav: true,
                loop: true,
            }
        }}  );

    
        if(searchTerm=="") 
    setSearchResults(props.plst);
    });

    React.useEffect(async() => {

    if(props.plst.playlists instanceof Array)
    {


    const results = props.plst.playlists.filter(playlist =>
    {

        return playlist.videos.filter(video=>
        {return video.name.toLowerCase().includes(searchTerm.toLowerCase());}
        ).length>0 ||playlist.name.toLowerCase().includes(searchTerm)||playlist.description.toLowerCase().includes(searchTerm.toLowerCase())

    }
    
    );

    if(results.length>0)
    {setSearchResults({"playlists":results});}
    else {
        if(results.length==0)        setSearchResults({"playlists":{}} );
        $('.owl-carousel-c-second').owlCarousel({nav:true,
        center:true,
        items:4,
        loop: true,
        slideBy:2,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            loop: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
            1200: {
                items: 4,
                nav: true,
                loop: true,
            }
        }}  );
    }
    
    }
    else {

        setSearchResults(props.plst);
    }
    


$('.owl-carousel-c-second').owlCarousel({nav:true,
        center:true,
        items:4,
        loop: true,
        slideBy:2,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
            },
            1200: {
                items: 4,
                nav: true,
                loop: true,
            }
        }}  );
    
}, [searchTerm]);

const [isSearch, setIsSearch] = useState(true);

const myarr = [];
    return (
    <React.Fragment> 
    
    <div style={{paddingLeft:"50px !important",paddingRight:"50px !important"}}>
<OwlCarouselMain/>
<div className="descr">
    <p>Largest collection of 4K &amp; 4K HDR videos for relaxation! <span>1.476</span> hours &amp; <span>899</span> videos for your home and business! <span>New content is added REGULARLY!</span></p>
</div>
<div className="mm justify-content-center">
<div className="search-div col-md-11 mw" align="center">
            <span>
                <img src="/img/search.svg" alt=""/>
                <input type="text" id="search_video" name="search_video" placeholder="Search video" value={searchTerm} onChange={handleChange} /> 
            </span>
    
</div>
</div>
{!isPlaylistsNotEmpty?(
<SlickplaylistsExplore playlists={props.plst} mainpage={false}/>

):(
    <div></div>
)}




<div >
{isSearch ? (
    
<div className=" playlists-scrollbox">
<PlaylistViewSecond playlists={searchResults} start={props.plst} initial={true}/>
        </div>

):(


<div className=" playlists-scrollbox">
<PlaylistView playlists={searchResults}/>
        </div>
    
)}
</div>


</div>
<section className="main-sign-up">
    <div className="signup-text">
        <h5>Love the Earth – Relax with Nature!</h5>
        <p>Behold the beauty of nature! <b>Relax and restore yourself 
            together with {EXPANDED_SITENAME}.</b> Experience the majestic landscapes, enjoy the stunning views of the mountains, explore the diverse wildlife, listen to the soothing sounds of the rushing waterfalls and calm lakes, enjoy birds singing in the deep forests and more. <b>{EXPANDED_SITENAME2} brings peace and restores your inner peace and harmony in your life!</b></p>
        <a href="subscription" className="button">Sign Up Now</a>
    </div>

</section>
<div className="under-footer">
<div className="more-inform my-2 my-lg-0">
<p className="footer-follow"></p><h6>Available on multiple devices.</h6><p></p>
    <div className="social">
        

        <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android.png" alt="android app"/></a>
        <a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8" target="_blank" rel="nofollow"><img src="/img/platforms/iphone.png" alt="iphone app"/></a>
        <a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><img src="/img/platforms/roku.png" alt="roku app"/></a>
        <a href="#" rel="nofollow"><img src="/img/platforms/samsung-smart-tv.png" alt="roku app"/></a>
<br/><br/>
        <a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><img src="/img/platforms/android-tv.png" alt="android tv"/></a>
        <a href="https://apps.apple.com/us/app/4k-nature-relax-tv/id1403683336#?platform=appleTV" target="_blank" rel="nofollow"><img src="/img/platforms/apple-tv.png" alt="apple tv"/></a>
        <a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><img src="/img/platforms/fire-tv.png" alt="amazon fire tv"/></a>
        

    </div>
</div>
    </div>
</React.Fragment>
    )
}

export default Explore;