import React from 'react'

class SearchBar extends React.Component {

    state = { input : ''}

    onchangeofinput = (event) => {
        this.setState({ input : event.target.value})
    }

    onformsubmit = event => {
        event.preventDefault();
        this.props.onsubmitinput(this.state.input)
    }
    render(){
        return(
            <div className="ui segment">
            <form onSubmit={this.onformsubmit}  className="ui form">
                <div className="field">
                <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.input}
                    onChange={this.onchangeofinput}/>
                    
                </div>
                 </form>

            </div>
        )
    }
}



export default SearchBar;