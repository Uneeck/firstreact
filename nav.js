import React from 'react';

export default class Button extends React.Component {

    componentWillMount(){
        this.setState({
            counter: 0
        });
    }

    addOne() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return
            <button onClick={this.addOne.bind(this)}>Add One</button>

    }
}