import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Explore from '../pages/explore/explore4k';
import Video from '../pages/video/video';
import Playlists from '../pages/playlist/playlists';
import sha1 from 'crypto-js/sha1';
export default function Pl() {

     const [playlists, setPlaylists] = React.useState([]);
   /*
     const privateKey="~UniHash-767250902345~";
     let action = "action=LoginAnonymous";
     let endpoint = "https://4krelax.bringstream.com/Engine/apic/apic.php?";
     let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?"+action;
      //const logindata ={"emailLogin":{"email":"dk@itf-ua.org","password":"&Px5foU7J[$g2[^"}};
     let formData = new FormData();
     let signature= sha1(action+privateKey+'{}')
formData.append('jsonData','{}');
formData.append('signature',signature);

     fetch(queryString, {
         mode:"cors",
         method:"POST",
         body:formData
})
  .then((response) => {
     
    return response.json();
  })
  .then(data => 
    {
         queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetPlaylists&openKey="+data.aOpenKey;
         action="action=GetPlaylists&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData ='{"where":"id = 1","general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}';
        let signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("data",data);

        queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetVideoInfo&openKey="+data.aOpenKey;
        action="action=GetVideoInfo&openKey="+data.aOpenKey;
         formData = new FormData();
         jsonData ='{"id":122235239,"fields":{"name":30,"duration":0,"pictures":[640,1920],"hdr":0}}';
         signature = sha1(action + data.aPrivateKey + jsonData);
        console.log("privatekey",data.aPrivateKey);
        formData.append('jsonData',jsonData);
        formData.append('signature',signature);
        fetch(queryString, {
                mode:"cors",
                method:"POST",
                body:formData
        })
        .then((response) => {
            return response.json();
        })
        .then(data => 
            {console.log("data",data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("data",data);
    }


    
  )
  .catch(error => {
    console.log("error", error);
  });

*/

   

  React.useEffect(async() => {
       const GetPlaylistsArray = async(data)=>{
        let queryString = "https://4krelax.bringstream.com/Engine/apic/apic.php?action=GetPlaylists&openKey="+data.aOpenKey;
        let   action="action=GetPlaylists&openKey="+data.aOpenKey;
        let formData = new FormData();
        let jsonData =`{"general":1,"new":1,"favorites":1,"statistic":1,"count":10,"playlists_fields":{"id":0,"name":30,"description":50,"premium":0,"free":0,"duration":0,"pictures":[640,1920],"videos_count":0},"videos":{"count":10,"fields":{"id":0,"name":30,"duration":0,"hdr":0,"pictures":[600],"position":0}}}`;
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
            return  response.json();
        })
        .then(data => 
            {console.log("searchdata",data); setPlaylists(data);})
            .catch(error => {
            console.log("error", error);
        });
        console.log("datalogin",data);
  }


  const GetLoginAnonymous = async()=>{

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
    { GetPlaylistsArray(data); ;
         }


    
  )
  .catch(error => {
    console.log("error", error);
  });
  }
      GetLoginAnonymous();
  },[]);

    return (
        <Router>
            <Route exact path='/'  render={(props) => (
                            <Home  plstz={playlists}/>
            )} />
            <Route exact path='/about' component={About}  />
            <Route exact path='/explore' 
                        render={(props) => (
                            <Explore plst={playlists} />
            )} />
            <Route exact path='/playlist/:id' render={(props) => (
                            <Playlists {...props} plst={playlists} />
            )} />
             <Route exact path='/video/:id'  render={(props) => (
                            <Video {...props} plst={playlists} />
            )} />
        </Router>
    )
}