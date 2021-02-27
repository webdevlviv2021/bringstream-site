import React from 'react';

const OwlCarouselVideoItemsSmall = (props) => {
   
   return <React.Fragment>{props.videos.map((item) => {
       var itemstyle = item.lock ? 'item-style-lock':'item-style-play';
    return  <div key={item.id} className="item">
                                <a href={item.link}>
                                    <div className={"c-item-style " + (itemstyle)}>
                                        
                                        <img src={item.img} alt={item.name}/> 
                                    </div>
                                   
                                </a>
                            </div>
  })}</React.Fragment>
}

export default OwlCarouselVideoItemsSmall;

