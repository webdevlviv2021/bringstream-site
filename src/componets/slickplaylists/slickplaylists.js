import React,{useEffect} from 'react';

const Slickplaylists= (props) => {
    console.log(props);
const isArray = (props.playlists.playlists instanceof Array) && (props.playlists.playlists!=undefined);
   return(
 <section className="playlists-s">
  <div className="container">
	      <div className="row">
       <div className="play-list-names col-md-12 col-sm-12 slick-slider">
       {isArray ?(
     
       props.playlists.playlists.map((item)=>{
            let itemlink ="playlist/"+item.id;
            return <div className="item" style={{"width":"100%","display":"inline-block"}} >
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