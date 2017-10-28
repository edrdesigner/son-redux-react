import React, { Component } from 'react';
import CounterComponent from './../components/Counter';

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Hello Redux
                <CounterComponent />
            </div>
        );
    }
}

export default App;