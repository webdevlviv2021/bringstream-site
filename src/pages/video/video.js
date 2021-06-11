import React, { useState, useEffect } from 'react';
import sha1 from 'crypto-js/sha1';
import {SITENAME} from '../../componets/sitename/sitename';
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
        if(itemtime.charAt(0)=="0") itemtime= itemtime.substring(1);
        return itemtime;
}
const GetVideoStarted = async(data)=>{

    let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?action=VideoStarted&openKey="+data.aOpenKey;
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

    let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?action=GetVideoInfo&openKey="+data.aOpenKey;
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
    let endpoint = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?";
    let queryString = "https://"+SITENAME+".bringstream.com/Engine/apic/apic.php?"+action;
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
    var playlistname;
    var playlistid;
    var playlistobject;
    var copyplaylistobject;
    var upnextvideos=[];
console.log(myvideo);
if(props.plst.playlists !=undefined){
        props.plst.playlists.forEach(element => {
            element.videos.forEach(video => {
            if(video.id==props.match.params.id)
            {
                myvideo=video;
                playlistname=element.name;
                playlistid=element.id;
                playlistobject=element;
            }
        });
        });
if(playlistobject!=undefined &&playlistobject!=null  )
{
copyplaylistobject=playlistobject;

         playlistobject.videos.forEach( video => {
                if(video.id!=props.match.params.id)  upnextvideos.push(video);
         });

                 upnextvideos.sort(() => Math.random() - 0.5);
}

}
        var title;

        title=videoname;
        description=videodesc;

        if(myvideo!=null){
        videosrc="https://player.vimeo.com/video/"+props.match.params.id+"?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=93675";
        }
        else { videosrc="#";}
    return (
        
        <React.Fragment>
        
        <div id="video_container">
        <iframe className="black_back iframebackground" src={videosrc} width="100%" height="624.125" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={videoname} __idm_id__="819894273" data-ready="true"></iframe>
    </div>
    <section class="video-list">
        <div class="container">
            <div class="row">
                <div class="video-l-st col-lg-9">
                                                <h1 id="the_name" in_favorites="0"><span>{videoname}</span>
                            <div class="btn-playlist" add="1">
                                <img class="iconAddPlaylist" src="/img/playlist.svg"/>
                                <span class="xs-hidden">Add to playlist</span>
                            </div>
                            <div class="btn-playlist" add="0">
                                <img class="iconRemovePlaylist" src="/img/cancel.svg"/>
                                <span class="xs-hidden">Remove from playlist</span>
                            </div>
                        </h1>
                        <div class="playlist_and_duration">
                            <span class="video_duration">{GetVideoDuration(videoduration)}</span>
                            <a class="playlist_name" href={"/playlist/"+playlistid}>{playlistname}</a>
                        </div>
                        <div>
                            <p id="the_desc">
                                {videodesc}</p>
                            <span class="dn more"><span>Show more</span><strong>
                                    <img src="/svg.svg"/>
                                </strong>
                            </span>
                        </div>
                </div>
                <div class="col-lg-3">
                        <div class="info-soc">
                            <p>Share with friends</p>
                            <div class="shareThis">
                                <div class="simpleSocialShareMainBlockContainer">
                                    <div class="simpleSocialShareTable">
                                        <div class="simpleSocialShareSitesContainer simpleSocialShareTableCell clearfix">
                                            <ul>
                                                <li class="simpleSocialShareEmail simpleSocialShareSiteContainer" title="Share via Email"></li>
                                                <li class="simpleSocialShareFacebook simpleSocialShareSiteContainer" title="Share via Facebook"></li>
                                                <li class="simpleSocialShareTwitter simpleSocialShareSiteContainer" title="Share via Twitter"></li>
                                                <li class="simpleSocialShareGoogle simpleSocialShareSiteContainer" title="Share via Google"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info-ios">
                            <p>Watch anywhere, anytime</p>
                            <ul>
                                <li><a href="https://itunes.apple.com/us/app/4k-nature-relax-tv/id1403683336?mt=8" target="_blank" rel="nofollow"><i className="fa fa-apple"></i></a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=xyz.gameoff.relaxation" target="_blank" rel="nofollow"><i className="fa fa-android"></i></a></li>
                                <li><a href="https://www.amazon.com/Pro-Art-inc-Nature-Relax/dp/B074MC1G9X" target="_blank" rel="nofollow"><i className="fa fa-amazon"></i></a></li>
                                <li><a href="#"><i className="fa fa-chrome"></i></a></li>
                                <li><a href="https://channelstore.roku.com/en-gb/details/268607/4k-nature-relax-tv" target="_blank" rel="nofollow"><img src="/img/roku-logo.png" alt="roku-app"/></a></li>
                            </ul>
                        </div>
                  </div>

                  <div className="col-lg-12">
                        <h5 className="video-up">UP Next in <a href={"/playlist/"+playlistid}>{playlistname}</a></h5>
                  </div>

                  {upnextvideos.slice(-3).map(video => {
                    return(  <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="item item-pl">
                                <a href={"/video/"+video.id}>
                                    <div className="c-item-style item-style-play">
                                        <img id="thumb_0" src={video.pictures[600]} alt=""/> 
                                        <div className="marks"><div className="free"></div></div></div>
                                    <div class="c-item-info row justify-content-between">
                                        <div className="col-8"><p id="name_0" className="cir-st1">{video.name}</p></div>
                                        <div className="col-4 c-item-info-st2"><p id="dur_0" className="cir-st2"> {GetVideoDuration(video.duration)}</p></div>
                                    </div>
                                </a>
                            </div>
                     </div>)
                  })}
                  
                        <div className="col-lg-12 bottom-show bottom-show-video">
                        <a href="/subscription">Start free trial!</a>
                        <p className="hide-when-logged">Or</p>
                        <a href="/login" className="hide-when-logged">Sign in</a>
                    </div>
            </div>
        </div>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>

    </React.Fragment>
    )
}

export default Video;