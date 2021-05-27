import React,{useEffect} from 'react';
import Slider from "react-slick";

import "./slick.css";

const SlickplaylistsExplore= (props) => {
    console.log("slickexploreprops",props);
const isArray = (props.playlists!==undefined)&&(props.playlists.playlists instanceof Array) && (props.playlists.playlists!==undefined);
const $=window.jQuery;
const settings = {
		mobileFirst: true,
        arrows:true,
        draggable: true,
		dots: false,
		swipeToSlide: true,
		infinite: true,
        
		variableWidth: true,
      
	};
var mainpage = props.mainpage? "":"-explore";
    if(isArray){
   return(
       
 <section className="playlists-s">
 
  <div className="container-explore">

	      <div className="row">
          <div className={"play-list-names"+ (mainpage)}>
            <Slider {...settings}>
            
     
      {props.playlists.playlists.map((item)=>{

            let itemlink ="playlist/"+item.id;
            return <div className="item" style={{"max-width":"240px","display":"inline-block"}}>
                <a href={itemlink} tabIndex="-1">{item.name}</a>
            </div>
           })}
           

          
          
           
            </Slider>
    </div>
  
       </div>
       </div>
       </section>
   );
   }
   else {
       return(<div></div>);
   }

}

export default SlickplaylistsExplore;