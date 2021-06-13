import React from 'react';
const GetVideoDuration = (seconds)=>
{
    let date = new Date(0);
          date.setSeconds(seconds); // specify value for SECONDS here

        let itemtime = date.toISOString().substr(11, 8);
         if(itemtime.charAt(0)=="0") itemtime= itemtime.substring(1);
        return itemtime;
}
const OwlCarouselVideoItemsSmall = (props) => {
    console.log("OwlCarouselVideoItemsSmall props",props);
   function handleClick(name,link,img,duration,ev){
       console.log(ev);
       document.getElementById("free_preview_name").innerHTML=name;
       document.getElementById("free_preview_duration").innerHTML=GetVideoDuration(duration);
       document.getElementById("free_preview_description").innerHTML=props.playlistname;
       document.getElementById("watch_free_preview").setAttribute("href",link);
      document.getElementsByClassName("free-preview")[0].setAttribute("style",
      "background-image: url('"+img+"'); display: block;"
      );
       console.log(name);
   };
   return <React.Fragment>{props.videos.map((item,index) => {
       var itemstyle = false ? 'item-style-lock':'item-style-play';
       let itemlink="video/"+item.id;
       if(index==0)
       {
            document.getElementById("free_preview_name").innerHTML=item.name;
            document.getElementById("free_preview_duration").innerHTML=GetVideoDuration(item.duration);
            document.getElementById("free_preview_description").innerHTML=props.playlistname;
            document.getElementById("watch_free_preview").setAttribute("href",itemlink);
            document.getElementsByClassName("free-preview")[0].setAttribute("style",
            "background-image: url('"+item.pictures["600"]+"'); display: block;"
            );
       }
    return  <div key={item.id} className="item fpslide" onClick={(e) => handleClick(item.name,itemlink,item.pictures["600"],item.duration, e)}
            video_url={itemlink} title={item.name} picture={item.pictures["600"]} duration={GetVideoDuration(item.duration)} description={props.playlistname}
    >
                              
                                    <div className={"c-item-style"}>
                                        <div className="marks"><div className="free"></div></div>
                                        <img src={item.pictures["600"]} alt={item.name}/> 
                                    </div>
                                   
                             
                            </div>
  })}</React.Fragment>
}

export default OwlCarouselVideoItemsSmall;

