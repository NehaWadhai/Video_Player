import React from 'react'
import Videoitems from './Videoitem.css'

const Videoitem = ({gotvideolist, onselectvideo}) => {

    console.log('title', gotvideolist)
    return(
        // <div>neha</div>
        <div onClick={()=> onselectvideo(gotvideolist)} className="video-item item">
        <img alt={gotvideolist.snippet.title}classname=" ui image" src={gotvideolist.snippet.thumbnails.medium.url}/>
        <div classname="content">
        <div className="head header">{gotvideolist.snippet.title}
        </div >
        </div>
        </div>
    )
}

export default Videoitem;