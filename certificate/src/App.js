
import React, {Component} from 'react';
import './CSS/App.css';
import Dash from './Dash';


class App extends Component {
    render() {
        return (
            <div>
                <Dash/>
                {this.props.children}
            </div>
        );
    }
}




export default App;
