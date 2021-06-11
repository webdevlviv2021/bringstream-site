  import React from 'react'
  import { Icon, InlineIcon } from '@iconify/react';
  import playCircleO from '@iconify-icons/fa/play-circle-o';
  import "./playlists.css";
  import "../../componets/header/header.css";
  import sha1 from 'crypto-js/sha1';
  const Playlists = (playlists) => {
    console.log(playlists.plst);
    let myplaylist;


      // if(playlists.plst!=null&&Array.isArray(playlists.plst))
      // {
      //     if(typeof playlists.plst[playlists.match.params.id-1] === 'object')
      //     {
      //       myplaylist=playlists.plst[playlists.match.params.id-1];
      //     }
        
      // }


console.log(playlists.plst.playlists);
if(playlists.plst.playlists!=undefined)
  {
      playlists.plst.playlists.forEach(item=>{
          if(playlists.match.params.id==item.id)
            {myplaylist=item;}
      });
}
        console.log(myplaylist);
      if (myplaylist==null ) return(<div></div>);
      console.log(myplaylist);
      return (
        <section className="playlists-s">
    <div className="container">
          <div className="row">

        <div className="col">
          <div className="title-carousel">
          <div>
            <h1>
            <a href="#">
              <Icon icon={playCircleO} />
              <span>{myplaylist.name}</span>
            </a>
          </h1>
              <div className="playlist-desc">{myplaylist.description}</div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="row" >



  {
    myplaylist.videos.map((item) => {
      let itemlink ="/video/"+item.id;
        let date = new Date(0);
          date.setSeconds(item.duration); // specify value for SECONDS here

        let itemtime = date.toISOString().substr(11, 8);
        if(itemtime.charAt(0)=="0") itemtime= itemtime.substring(1);
    return (<div style={{margin:"10px"}} className="col-12 col-sm-6 col-md-6 col-lg-4" >
      <div className="item item-pl">
        <a href={itemlink}>
        <div className="c-item-style item-style-play">
            <div className="marks"><div className="free"></div></div>        <img src={item.pictures[600]} alt={item.name}/> 
        </div>
        <div className="c-item-info  row justify-content-between">
          <div className="col-8" ><p className="cir-st1">{item.name}</p></div>
          <div className="col-4 c-item-info-st2"><p className="cir-st2">{itemtime}</p></div>
        </div>
      </a>
    </div>
  </div>);
    })
  }
  
  </div>
  </div>
  </section>
      )
  }

  export default Playlists;