import React from 'react';
import PlaylistCarouselSecond from '../playlistcarouselsecond/playlistcarouselsecond';

const PlaylistViewSecond = (playlists, initial) => {
console.log(playlists);
    if(playlists.playlists.playlists instanceof Object)
    {
    


    if(Object.keys(playlists.playlists.playlists).length===0){ return(<div>Nothing found</div>)};
    const listItems = 
    playlists.playlists.playlists.map( ( {id,name,description,duration,premium,free,pictures,videos} ) => {
    let link = "playlist/"+id;
    return <PlaylistCarouselSecond link={link} playlistname={name} videos={videos} free={free} premium={premium} duration={duration}/>
});

    return (
            listItems
    );
    }

    else {
        return (<div></div>);
    }
}

export default PlaylistViewSecond;