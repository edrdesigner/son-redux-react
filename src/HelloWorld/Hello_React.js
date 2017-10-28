import React, { Component } from 'react';
import StateInput from '../StateInput/StateInput';


class Hello extends Component {

    constructor(props) {
        super(props)
        
        this.handleClickBtn = this.handleClickBtn.bind(this)    
    }

    handleClickBtn() {
        this.setState({
            msg: 'Hello'
        })
    }
    
    componentWillMount() {
        this.setState({
            msg: ''
        })
    }

    

    render() {
      

        return (
            <div >
                
                <button type="button" onClick={this.handleClickBtn}>Button</button>
                <span>{this.state.msg}</span>
              
            </div>
        );
    }
}

export default HelloWorld;