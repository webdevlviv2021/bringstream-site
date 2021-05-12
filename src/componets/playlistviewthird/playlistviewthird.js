import React from 'react';
import NewestUploads from '../newestuploads/newestuploads';

const PlaylistViewThird = (playlists) => {

const $=window.jQuery;
        


  



       if(playlists instanceof Object && playlists.playlists instanceof Array && playlists.playlists.length>0 && playlists.playlists[0].playlists instanceof Array)
    {
    


  //if(Object.keys(playlists.playlists.playlists).length===0){ return(<div>Nothing</div>)};
    const listItems = 
    playlists.playlists[0].playlists.slice(0,1).map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    name="Newest uploads";
        $('.owl-carousel-c-fourth').owlCarousel({nav:true,
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
    return <NewestUploads link={link} playlistname={name} videos={videos}/>
      
});

    return (
            listItems
    );
     }

     else {
         return (<div></div>);
     }
}

export default PlaylistViewThird;