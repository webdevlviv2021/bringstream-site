import React, { useState, useEffect } from 'react';
import sha1 from 'crypto-js/sha1';
const Video = (props) => {
//let videoinfo;
const [videoinfo, setVideoInfo] = useState({});
const [videoid, setVideoId] = useState(props.match.params.id);
const [videodesc, setVideoDesc] = useState("");
const [videoname, setVideoName] = useState("");
const [videoduration, setVideoDuration] = useState(0);


    window.onpopstate = function () {
        console.log(window.history);
      window.top.history.back();

    };
const GetVideoDuration = (seconds)=>
{
    let date = new Date(0);
          date.setSeconds(seconds); // specify value for SECONDS here

        let itemtime = date.toISOString().substr(11, 8);
        return itemtime;
}
const GetVideoStarted = async(data)=>{

   let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=VideoStarted&openKey="+data.aOpenKey;
        let action="action=VideoStarted&openKey="+data.aOpenKey;
         let formData = new FormData();
         let jsonData =`{"videoid":${videoid},"time":5,"resolution":1080}`;
         let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        await fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data); return data;})
            .catch(error => {
            console.log("error", error);
        });
}

const GetVideoData = async(data)=>{

   let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetVideoInfo&openKey="+data.aOpenKey;
        let action="action=GetVideoInfo&openKey="+data.aOpenKey;
         let formData = new FormData();
         let jsonData =`{"id":${videoid},"fields":{"name":60,"duration":0,"pictures":[640,1920],"hdr":0,"description":120}}`;
         let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        await fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data);
             setVideoInfo(data);
             setVideoDesc(data.video.description);
             setVideoName(data.video.name);
             setVideoDuration(data.video.duration);
             return data;
             })
            .catch(error => {
            console.log("error", error);
        });
}
const GetVideoInfo = async()=>{


     const privateKey="~UniHash-767250902345~";
     let action = "action=LoginAnonymous";
     let endpoint = "https://4krelax.bringstream.com/Engine/apic/apic.php?";
     let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?"+action;
      //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
     let formData = new FormData();
     let signature= sha1(action+privateKey+'{}')
     formData.append('jsonData','{}');
     formData.append('signature',signature);

     await fetch(queryString, {
         mode:"cors",
         method:"POST",
         body:formData
})
  .then((response) => {
     
    return response.json();
  })
  .then(data => 
    {

       GetVideoData(data);
       GetVideoStarted(data);
        console.log("data",data);
        return data;
    }


    
  )
  .catch(error => {
    console.log("error", error);
  });
}


var myvideo;
 useEffect(() => {
    setVideoInfo(GetVideoInfo());
    console.log(videoinfo.video);
     
  },[videoid]);
 

  var videosrc;
  var description;
console.log(myvideo);
if(props.plst.playlists !=undefined){
        props.plst.playlists.forEach(element => {
            element.videos.forEach(video => {
            if(video.id==props.match.params.id)
            {
                myvideo=video;
            }
        });
        });
}
        var title;

        title=videoname;
        description=videodesc;

        if(myvideo!=null){
        videosrc="https://player.vimeo.com/video/"+props.match.params.id+"?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=93675";
        }
        else { videosrc="#";}
    return (
        
        <div>
        
       <div id="video_container">
        <iframe className="black_back" src={videosrc} width="100%" height="532.125" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={videoname} __idm_id__="819894273" data-ready="true"></iframe>
    </div>
    <div class="video-l-st col-lg-9">
                                                <h1 id="the_name" in_favorites="0"><span>{videoname}</span>
                            <div class="btn-playlist" add="1">
                                <img class="iconAddPlaylist" src="/playlist.svg"/>
                                <span class="xs-hidden">Add to playlist</span>
                            </div>
                            <div class="btn-playlist" add="0">
                                <img class="iconRemovePlaylist" src="/img/cancel.svg"/>
                                <span class="xs-hidden">Remove from playlist</span>
                            </div>
                        </h1>
                        <div class="playlist_and_duration">
                            <span class="video_duration">{GetVideoDuration(videoduration)}</span>
                            <a class="playlist_name" href="/playlist-free-4k-4k-hdr-videos-1">FREE 4K &amp; 4K HDR Videos</a>
                        </div>
                        <div>
                            <p id="the_desc">
                                {videodesc}</p>
                            <span class="dn more"><span>Show more</span><strong>
                                    <img src="/svg.svg"/>
                                </strong></span>
                        </div>
                    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>

    </div>
    )
}

export default Video;