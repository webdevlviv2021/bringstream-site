import React from 'react';
import PlaylistCarousel from '../playlistcarousel/playlistcarousel';

const PlaylistView = (playlists) => {
console.log(playlists);
    if(playlists.playlists.playlists instanceof Object)
    {
    


  if(Object.keys(playlists.playlists.playlists).length===0){ return(<div>Nothing found</div>)};
    const listItems = 
    playlists.playlists.playlists.slice(0,3).map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    return <PlaylistCarousel link={link} playlistname={name} videos={videos} free={free} premium={premium} duration={duration}/>
});

    return (
            listItems
    );
     }

     else {
         return (<div></div>);
     }
}

export default PlaylistView;