import React,{useEffect} from 'react';

const Slickplaylists= (props) => {
console.log("slickprops",props);
const isArray = (props.playlists.playlists instanceof Array) && (props.playlists.playlists!=undefined);
console.log(isArray);
const $=window.jQuery;
 var playListNames = $('.play-list-names');
	
 useEffect(() => {
         // your post layout code (or 'effect') here.
        
  $('.play-list-names').not('.slick-initialized').slick({
		mobileFirst: true,
		arrows: true,
        draggable: true,
		dots: false,
		swipeToSlide: true,

		variableWidth: true,
	});
 // $('.play-list-names').slick('unslick');
 
     },
     // array of variables that can trigger an update if they change. Pass an
     // an empty array if you just want to run it once after component mounted. 
     [playListNames]);

   return(
 <section className="playlists-s">
  <div className="container">
	      <div className="row">
       <div className="play-list-names col-md-12 col-sm-12 slick-slider" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
       {isArray ?(
     
       props.playlists.playlists.map((item)=>{

            let itemlink ="playlist/"+item.id;
            return <div className="item " style={{"width":"100%","display":"inline-block"}}>
                <a href={itemlink} tabIndex="-1">{item.name}</a>
            </div>
           })

          
           ):(
               <div></div>
           )
           }
       </div>
       </div>
       </div>
       </section>
   );
  
   
}

export default Slickplaylists;