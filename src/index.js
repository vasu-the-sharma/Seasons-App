import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'; 
import Spinner from './Spinner.js';

class App extends React.Component {
    // React says we HAVE TO define render()
    constructor(props){
        super(props);

        // Only exception where we do not use setState is while we initialise inside constructor
        this.state = {lat: null, errorMessage: ""};
    }    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}), 
            err => this.setState({errorMessage: err.message}) 
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage} </div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message="Please allow to proceed ahead!"/>;
    }
    
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)