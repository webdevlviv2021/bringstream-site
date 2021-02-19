import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import OwlCarouselMain from '../../componets/owlcarouselmain/owlcarouselmain';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PlaylistCarousel from '../../componets/playlistcarousel/playlistcarousel';
import PlaylistView from '../../componets/playlistview/playlistview';
import PlaylistViewSecond from '../../componets/playlistviewsecond/playlistviewsecond';
import Slickplaylists from '../../componets/slickplaylists/slickplaylists';

const Explore = (props) => {
    const $=window.jQuery;
var [filterplst, setFilterplst] = useState([]);
filterplst=props.plst;
const [filterplstsc, setFilterplstsc] = useState(filterplst);
const [isSearch, setIsSearch] = useState(false);
var filteredplaylists=[];
    return (
        <div style={{paddingLeft:"50px !important",paddingRight:"50px !important"}}>
<OwlCarouselMain/>
<div className="search-div">
            <span>
                <img src="/img/search.svg" alt=""/>
                <input type="text" id="search_video" name="search_video" placeholder="Search video" onChange={(event)=>{
if(event.target.value!='' && event.target.value!=null){
    console.log(filterplst);
                      let searchString = event.target.value;
                      console.log(searchString);
                      for(var i=0;i<props.plst.length;i++)
                      {

                          var newArray = props.plst[i].videos.filter(function (el) {
                            return el.name == searchString;
                            });
                            filterplst[i].videos=newArray;

                      }
       console.log(filterplst);
                    setIsSearch(true);

                    }
                    else {
                        setIsSearch(false);
                        //setFilterplst(props.plst);
                        }
                
       }
       }
       /> 
            </span>
        </div>
<Slickplaylists playlists={props.plst}/>
<div >
{isSearch ? (
    
<div className=" playlists-scrollbox">
<PlaylistViewSecond playlists={filterplst}/>
        </div>
  
):(

  
<div className=" playlists-scrollbox">
<PlaylistView playlists={props.plst}/>
        </div>
    
)}
</div>
</div>
    )
}

export default Explore;