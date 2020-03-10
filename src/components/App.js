import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtubeapi.js'
import Videolist from './Videolist'
import Videodetail from './Videodetail'

class App extends React.Component {


    componentDidMount() {
        this.onsubmitofterm('saki saki')
    }

      state = { video : [], selectvideo: null}

    onsubmitofterm = async input => {
        const response = await youtube.get('/search',{
        params : {
            q : input

        }})

   
        console.log('value of video' ,response.data.items)
        this.setState({video : response.data.items,
        selectvideo : response.data.items[0]})
    }
    onselectvideo = (video) => {
        console.log('in app', video)
        this.setState({selectvideo : video})

    }

    render(){
    return(

        <div className="ui container"> 
        <SearchBar onsubmitinput={this.onsubmitofterm}/>
        {console.log('value before call' , this.state.video)}
        <div className="ui grid">
        <div className="ui row" >
        <div className="eleven wide column">
        <Videodetail video={this.state.selectvideo} />
        </div>
        <div className="five wide column">
        <Videolist onselectvideo={this.onselectvideo}videos={this.state.video} />
        </div>
        </div>
        </div>
        </div>
    )
    }
}

export default App;