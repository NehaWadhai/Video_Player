import React from 'react'

const Videodetail = ({video}) => {
    console.log('in videodetail-1', video)
    if(!video)
    {
        
        return(
        <div>Videodetail</div>)
    }

    const Videosource = `https://www.youtube.com/embed/${video.id.videoId}`
    
    return(
        <div>
            <div className="ui embed">
                <iframe key={video.id.videoId}width="460" height="215" src={Videosource} />
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.title}</p>
                </div>
        </div>
        </div>
        
    )
}

export default Videodetail;