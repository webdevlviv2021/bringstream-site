import React from 'react';
import PlaylistCarouselSecond from '../playlistcarouselsecond/playlistcarouselsecond';

const PlaylistView = (playlists) => {
    const listItems =playlists.playlists.map( ( {link, playlistname,videos} ) => {

    return <PlaylistCarouselSecond link={link} playlistname={playlistname} videos={videos}/>
});

    return (
            listItems
    );
}

export default PlaylistView;