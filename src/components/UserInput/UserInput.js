import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.usernameChange} />
            </div>
        );
    }
}

export default UserInput;