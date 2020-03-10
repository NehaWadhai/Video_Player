import React from 'react'

import Videoitem from './Videoitem'

const  Videolist = ({videos, onselectvideo}) => {

      const componentgot =  videos.map((vlc) => {
            return <Videoitem onselectvideo={onselectvideo} gotvideolist={vlc}/>
        }

        )

    return (
    <div className="ui relaxed divided list">{componentgot} </div>
    )
}

export default Videolist;